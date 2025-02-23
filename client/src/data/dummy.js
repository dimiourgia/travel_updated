const dummyCabs = {
  itineraryId: null,
  foromId: null,
  date: null,
  returnDate:null,
  selectedDates: [],
  class: null,
  time: null,
  pickupAddress: null,
  dropAddress: null,
  isFullDayCab: false,
  violations: {
    class: null,
    amount: null,
  },
  bkd_date: null,
  bkd_class: null,
  bkd_time: null,
  bkd_returnTime: null,
  bkd_pickupAddress: null,
  bkd_dropAddress: null,
  bkd_violations: {
    class: null,
    amount: null,
  },
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
};

const dummyCarRentals = {
  itineraryId: null,
  foromId: null,
  date: null,
  returnDate:null,
  selectedDates: [],
  class: null,
  time: null,
  pickupAddress: null,
  dropAddress: null,
  violations: {
    class: null,
    amount: null,
  },
  bkd_date: null,
  bkd_class: null,
  bkd_time: null,
  bkd_returnTime: null,
  bkd_pickupAddress: null,
  bkd_dropAddress: null,
  bkd_violations: {
    class: null,
    amount: null,
  },
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
};

const dummyFlight = {
  itineraryId: null,
  formId: null,
  date: null,
  returnDate: null,
  travelClass: null,
  time: null,
  returnTime: null,
  from: null,
  to: null,
  isReturnTravel: false,
  violations: {
    class: null,
    amount: null,
  },
  bkd_date: null,
  bkd_returnDate: null,
  bkd_travelClass: null,
  bkd_time: null,
  bkd_returnTime: null,
  bkd_from: null,
  bkd_to: null,
  bkd_violations: {
    class: null,
    amount: null,
  },
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
  approvers: [],
  rejectionReason: null,

  travelAllocations: [],
};

const dummyBus = {
  itineraryId: null,
  formId: null,
  date: null,
  travelClass: null,
  time: null,
  from: null,
  to: null,
  violations: {
    class: null,
    amount: null,
  },
  bkd_date: null,
  bkd_travelClass: null,
  bkd_time: null,
  bkd_from: null,
  bkd_to: null,
  bkd_violations: {
    class: null,
    amount: null,
  },
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
  approvers: [],
  rejectionReason: null,
  travelAllocations: [],
};

const dummyTrain = {
  itineraryId: null,
  formId: null,
  date: null,
  returnDate: null,
  travelClass: null,
  time: null,
  returnTime: null,
  from: null,
  to: null,
  violations: {
    class: null,
    amount: null,
  },
  bkd_date: null,
  bkd_class: null,
  bkd_time: null,
  bkd_from: null,
  bkd_to: null,
  bkd_travelClass: null,
  bkd_violations: {
    class: null,
    amount: null,
  },
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
  approvers: [],
  rejectionReason: null,
};

const dummyHotel = {
  itineraryId: null,
  formId: null,
  location: null,
  locationPreference: null,
  class: null,
  checkIn: null,
  checkOut: null,
  checkInTime: null,
  checkOutTime: null,
  needBrakfast: false,
  needLunch: false,
  needDinner: false,
  needNonSmokingRoom : false,
  violations: {
    class: null,
    amount: null,
  },
  bkd_location: null,
  bkd_class: null,
  bkd_checkIn: null,
  bkd_checkOut: null,
  bkd_checkInTime: null,
  bkd_checkOutTime: null,
  bkd_violations: {
    class: null,
    amount: null,
  },
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
  approvers: [],
};

const dummyPersonalVehicle = {
  itineraryId: null,
  formId: null,
  date: null,
  time: null,
  from: null,
  to: null,
  modified: false,
  cancellationDate: null,
  cancellationReason: null,
  status: "draft",
  bookingDetails: {
    docURL: null,
    docType: null,
    billDetails: {
      vendorName: null,
      taxAmount: null,
      totalAmount: null,
    },
  },
  approvers: [],
  rejectionReason: null,
};

export {
  dummyCabs,
  dummyCarRentals,
  dummyFlight,
  dummyBus,
  dummyTrain,
  dummyHotel,
  dummyPersonalVehicle,
};
