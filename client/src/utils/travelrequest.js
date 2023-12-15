const TravelRequestData = {
    tenantId: 'tenantId_87867',
    tenantName: 'Example Tenant',
    companyName: 'Example Company',
    travelRequestId: 'TRID_5654XYTRR',
    tripPurpose: 'Business Meeting',
    travelRequestStatus: 'paid and cancelled',
    tripStatus: 'paid and cancelled',
    travelRequestState: 'section 0',
    createdBy: {
      empId: 'exampleEmployeeId',
      name: 'John Doe',
    },
    createdFor: {
      empId: 'EMPID_DR565',
      name: 'Jane Doe',
    },
    teamMembers: ['Team Member 1', 'Team Member 2'],
    travelAllocationHeaders: ['Allocation Header 1', 'Allocation Header 2'],
    itinerary: [
      {
        journey: {
          from: 'Lucknow',
          to: 'Delhi',
          departure: {
            itineraryId: 'DEP_ABC12',
            date: '2023-01-01',
            time: '08:00 AM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'booked',
          },
          return: {
            itineraryId: '',
            date: '',
            time: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'booked',
          },
        },
        hotels: [
          {
            locationPreference: 'near to bus stand',
            itineraryId: 'HOTEL_ABC12',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'paid and cancelled',
          },
          {
            itineraryId: 'HOTEL_XYZ34',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'paid and cancelled',
          },
        ],
        cabs: [
          {
            itineraryId: 'CAB_ABC12',
            date: '2023-01-02',
            class: 'Sedan',
            prefferedTime: '10:00 AM',
            pickupAddress: 'Pickup Location',
            dropAddress: 'Drop Location',
            cabClassVioilationMessage: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
        ],
        modeOfTransit: 'Airplane',
        travelClass: 'Business',
        needsVisa: true,
        needsBoardingTransfer: true,
        needsHotelTransfer: true,
        boardingTransfer: {
          itineraryId: 'BOARD_ABC12',
          prefferedTime: '12:00 PM',
          pickupAddress: 'Boarding Pickup Location',
          dropAddress: 'Boarding Drop Location',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        hotelTransfer: {
          itineraryId: 'HTL_TRNS_XYZ34',
          prefferedTime: '2:00 PM',
          pickupAddress: 'Hotel Pickup Location',
          dropAddress: 'Hotel Drop Location',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        needsHotel: true,
        needsCab: true,
        status: 'paid and cancelled',
      },
  

      {
        journey: {
          from: 'Bengaleru',
          to: 'Mumbai',
          departure: {
            itineraryId: 'DEP_ABF3G',
            date: '2023-01-01',
            time: '08:00 AM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
          return: {
            itineraryId: 'RET_XYG24',
            date: '2023-01-10',
            time: '06:00 PM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'booked',
          },
        },
        hotels: [
          { 
            locationPrefrence:'near to bus stand',
            itineraryId: 'HOTEL_ABC22',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'booked',
          },
        ],
        cabs: [
          {
            itineraryId: 'CAB_ARE12',
            date: '2023-01-02',
            class: 'Sedan',
            prefferedTime: '10:00 AM',
            pickupAddress: 'Pickup Location',
            dropAddress: 'Drop Location',
            cabClassVioilationMessage: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
          {
            itineraryId: 'CAB_A54XE',
            date: '2023-01-02',
            class: 'Sedan',
            prefferedTime: '10:00 AM',
            pickupAddress: 'Pickup Location',
            dropAddress: 'Drop Location',
            cabClassVioilationMessage: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
        ],
        modeOfTransit: 'Train',
        travelClass: 'Business',
        needsVisa: true,
        needsBoardingTransfer: true,
        needsHotelTransfer: true,
        boardingTransfer: {
          itineraryId: 'BOARD_0006',
          prefferedTime: '12:00 PM',
          pickupAddress: 'Boarding Pickup Location',
          dropAddress: 'Boarding Drop Location',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'booked',
        },
        hotelTransfer: {
          itineraryId: '0007',
          prefferedTime: '2:00 PM',
          pickupAddress: 'Hotel Pickup Location',
          dropAddress: 'Hotel Drop Location',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        needsHotel: true,
        needsCab: true,
        status: 'booked',
      },
      {
        journey: {
          from: 'Bengaleru',
          to: 'Mumbai',
          departure: {
            itineraryId: 'DEP_AB065',
            date: '2023-01-01',
            time: '08:00 AM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
          return: {
            itineraryId: 'RET_XCD34',
            date: '2023-01-10',
            time: '06:00 PM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
        },
        hotels: [
          { 
            locationPrefrence:'near to bus stand',
            itineraryId: 'HOTEL_ABC32',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'paid and cancelled',
          },
        ],
        cabs: [
          {
            itineraryId: 'CAB_ATRCF',
            date: '2023-01-02',
            class: 'Sedan',
            prefferedTime: '10:00 AM',
            pickupAddress: 'Pickup Location',
            dropAddress: 'Drop Location',
            cabClassVioilationMessage: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'booked',
          },
          {
            itineraryId: 'CAB_AXDER',
            date: '2023-01-02',
            class: 'Sedan',
            prefferedTime: '10:00 AM',
            pickupAddress: 'Pickup Location',
            dropAddress: 'Drop Location',
            cabClassVioilationMessage: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
        ],
        modeOfTransit: 'Airplane',
        travelClass: 'Business',
        needsVisa: true,
        needsBoardingTransfer: true,
        needsHotelTransfer: true,
        boardingTransfer: {
          itineraryId: 'gy56',
          prefferedTime: '12:00 PM',
          pickupAddress: 'Boarding Pickup Location',
          dropAddress: 'Boarding Drop Location',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        hotelTransfer: {
          itineraryId: '0007',
          prefferedTime: '2:00 PM',
          pickupAddress: 'Hotel Pickup Location',
          dropAddress: 'Hotel Drop Location',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        needsHotel: true,
        needsCab: true,
        status: 'booked',
      },

      {
        journey: {
          from: 'Sandila',
          to: 'Jaipur',
          departure: {
            itineraryId: 'DEP-QWE01',
            date: '2023-01-01',
            time: '08:00 AM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
          return: {
            itineraryId: 'RET_XTR25',
            date: '2023-01-10',
            time: '06:00 PM',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
        },
        hotels: [
          { locationPrefrence:'near to bus stand',
            itineraryId: 'HOTEL_ARC65',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'paid and cancelled',
          },
          {
            itineraryId: 'HOTEL_ABCDE',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'paid and cancelled',
          },
          {
            itineraryId: 'HOTEL_ABCYT',
            class: 'Standard',
            checkIn: '2023-01-01',
            checkOut: '2023-01-05',
            hotelClassViolationMessage: '',
            isCancelled: false,
            cancellationDate: '',
            status: 'paid and cancelled',
          },
        ],
        cabs: [
          {
            itineraryId: 'CAB_AXDEE',
            date: '2023-01-02',
            class: 'Sedan',
            preferredTime: '10:00 AM',
            pickupAddress: '123 Business Street, Suite 789, Urban City, State 56789',
            dropAddress: '456 Corporate Avenue, City Center, State 56789',
            cabClassViolationMessage: '',
            isModified: false,
            isCancelled: false,
            cancellationDate: '',
            cancellationReason: '',
            status: 'paid and cancelled',
          },
        ],
        modeOfTransit: 'Bus',
        travelClass: 'Business',
        needsVisa: true,
        needsBoardingTransfer: true,
        needsHotelTransfer: true,
        boardingTransfer: {
          itineraryId: 'BORTR_YTR54',
          prefferedTime: '12:00 PM',
          pickupAddress: '789 Travel Plaza, Downtown, State 56789',
          dropAddress: '101 Boarding Street, City Hub, State 56789',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        hotelTransfer: {
          itineraryId: 'HOTELTR_A6712',
          prefferedTime: '2:00 PM',
          pickupAddress: '321 Hotel Lane, Suburbia, State 56789',
          dropAddress: '567 Vacation Court, Resort Area, State 56789',
          isModified: false,
          isCancelled: false,
          cancellationDate: '',
          cancellationReason: '',
          status: 'paid and cancelled',
        },
        needsHotel: true,
        needsCab: true,
        status: 'booked',
      }
    ],
    tripType: { oneWayTrip: false, roundTrip: true, multiCityTrip: false },
    travelDocuments: ['Document 1', 'Document 2'],
    bookings: [
      {
        itineraryReference: {},
        docURL: 'exampleDocumentURL',
        details: {},
        status: {},
      },
    ],
    approvers: [
      {
        empId: 'approverEmployeeId',
        name: 'Approver Name',
        status: 'pending approval',
      },
    ],
    preferences: ['Preference 1', 'Preference 2'],
    travelViolations: {},
    travelRequestDate: '2023-01-01',
    travelBookingDate: '2023-01-02',
    travelCompletionDate: '2023-01-15',
    travelRequestRejectionReason: '',
    isCancelled: false,
    cancellationDate: '',
    cancellationReason: '',
    isCashAdvanceTaken: 'No',
    sentToTrip: false,
  };
  // console.log(sampleTravelRequest);

  export default TravelRequestData;