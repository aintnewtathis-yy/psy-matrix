import { startMongo } from "$db/mongo";

startMongo().then(()=>{
    console.log('Mongo started');
}).catch(err => {
    console.error('Failed to start Mongo:', err);
});
