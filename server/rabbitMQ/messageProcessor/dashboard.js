import TravelRequest from "../../models/travelRequest.js"
import HRMaster from "../../models/hrMaster.js"

export async function addALeg(payload /* */){
    try{
        const {travelRequestId, tenantId, itineraryType, itineraryDetails} = payload
        
        const travelRequest = await TravelRequest.findOne({travelRequestId}) 
        if(!travelRequest) return {success:false, error: 'Travel Request not found'}

        let formIdCount = travelRequest.itinerary.formState.length
    
        travelRequest.itinerary[itineraryType] = [...travelRequest.itinerary[itineraryType], ...itineraryDetails]
        travelRequest.isAddALeg = true

        const result = travelRequest.save()

        return {success:true, error:null}
    }catch(e){
        return {success:false, error:encodeURI}
        
    }
}

export async function updatePreferences(payload /* */){
    try{
        const {tenantId, employeeId, travelPreferences} = payload
        
        const tenant = await HRMaster.findOne({tenantId})
        if(!tenant) return {success: false, error: 'Tenant not found'}
        let employeeData = tenant.employees.filter(emp=> emp.employeeId == employeeId)

        if(employeeData.length > 0){
            employeeData = employeeData[0]
            employeeData.travelPreferences = travelPreferences
            tenant.save()
            return {success:true, error:null}
        }

        return {success:false, error: 'Employee not found'}

    }catch(e){
        return {success:false, error:e}
    }
}


export async function updateBookingAdmin(payload){
    try{
        const {travelRequestId, assignedTo} = payload;
        
        const res = await TravelRequest.updateOne({travelRequestId}, {$set: { assignedTo  }}) 
        
        if(res.matchedCount == 0) {
            return {success: false, error: 'Travel Request not found'}
        }

        return {success: true, error: null}

    }catch(e){
        return {success: false, error:e}
    }
}

export async function updateFinanceAdmin(payload){
    try{
        const {travelRequestId, assignedTo} = payload;
        
        const res = await TravelRequest.updateOne({travelRequestId}, {$set: { 'assignedTo' : assignedTo }}) 
        
        if(res.matchedCount == 0) {
            return {success: false, error: 'Travel Request not found'}
        }

        return {success: true, error: null}

    }catch(e){
        return {success: false, error:e}
    }
}

