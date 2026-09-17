const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice (ledger, assetTag ,borrower) {

    const newLedger = structuredClone(ledger);

    if (!newLedger[assetTag]) {
      return {
        ledger: ledger,
        message: `Asset tag ${assetTag} not found.`
      };
    }
    
    if (newLedger[assetTag].status === 'CheckedOut') {
      return {
        ledger: ledger,
        message: `Device with asset tag ${assetTag} is already checked out.`};
    }
     
    newLedger[assetTag].borrower = borrower;
    newLedger[assetTag].status = 'CheckedOut';
    return {
      ledger: newLedger,
      message: `Asset tag ${assetTag} successfully checked out to ${borrower.name}.`
    };
}

function checkinDevice (ledger, assetTag) {
    
  const newLedger = structuredClone(ledger);

  if (!newLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset tag ${assetTag} not found.`
    };
  }

  newLedger[assetTag].borrower = {
    name: '',
    email:'',
  };
  newLedger[assetTag].status = 'CheckedIn';
  newLedger[assetTag].dueDate = '';

  return {
    ledger: newLedger,
    message: `Asset tag ${assetTag} successfully checked in.`
  };
}

// function listOverdueDevices () {
    
// }
// function serializeLedger () {
    
// }
// function loadLedger () {
    
// }

const peminjam = {
  name: 'ucup',
  email: 'ucup@sample.dev'
}

const coba = checkoutDevice(equipmentLedger, '2', peminjam);
// const coba = checkoutDevice(equipmentLedger, '2' );
console.log(coba);

// console.log(equipmentLedger?.[6]?.type);