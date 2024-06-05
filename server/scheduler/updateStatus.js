import TravelRequest from "../models/travelRequest.js";
import cron from 'node-cron';
import { sendToDashboardQueue, sendToOtherMicroservice } from "../rabbitMQ/publisher.js";
import dotenv from 'dotenv';

dotenv.config();

const scheduleTime = process.env.SCHEDULE_TIME??'* * * * *';
//basic status UpdateBatchJob function...
async function statusUpdateBatchJob(){
    try {
        //const results = await TravelRequest.find({travelRequestStatus: 'approved'})
        
        const travelRequestsToUpdate = await TravelRequest.find({ travelRequestStatus: 'approved' });

        const updatedTravelRequests = travelRequestsToUpdate.map((travelRequest) => {
          travelRequest.travelRequestStatus = 'pending booking';
          
          ['flights', 'trains', 'cabs', 'carRentals', 'buses'].map(itineraryType=>{
            travelRequest.itinerary[itineraryType].forEach(item=>{
              if(item.status == 'approved'){
                item.status = 'pending booking'
              }
            })
          })

          return travelRequest.save();
        });
        
        // Wait for all the updates to complete
        const res = await Promise.all(updatedTravelRequests);
  
        //send to dashboard
        if(res.length>0){
          // console.log(res)
          await sendToDashboardQueue(res, 'false', 'online')
          sendToOtherMicroservice(res, 'Batch Job To Update all approved')
        }

        console.log(`BJ: UPDATE travel-request status after approvig to pending booking :: match count: ${updatedResults.length}`)
       

      } catch (e) {
        console.error('error in statusUpdateBatchJob', e);
      }    
}

 // Schedule the cron job to run every day at midnight
 cron.schedule(scheduleTime, () => {
  console.log('Running batch job...');
  statusUpdateBatchJob();
});

// Function to trigger the batch job on demand
const triggerBatchJob = () => {
  console.log('Triggering batch job on demand...');
  statusUpdateBatchJob();
};

export { triggerBatchJob, statusUpdateBatchJob };