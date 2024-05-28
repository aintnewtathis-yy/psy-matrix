FROM node:18-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/Moscow
ARG PUBLIC_HELLO
ARG MONGO_URL
ENV MONGO_URL=$MONGO_URL

COPY . /usr/src/app
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/Moscow
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV MONGO_URL=$MONGO_URL

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
RUN npm i --only=production

COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3000
CMD ["node", "build/index.js"]
