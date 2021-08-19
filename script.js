
    var doc = window.prompt("Event");
    if (doc != null) {
        document.getElementById("g").innerHTML = doc
    }



(function (est) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";
            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }
            output += "</span>&nbsp;";
        }
        est.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})
(document.getElementById("est"));

//Times that work: 11 am EST, 12 am EST, 8pm EST, 1pm ET, 2pm ET, 3 pm ET, 4pm ET, 9pm ET

var hour = Number(window.prompt("Hour(in EST)"));
var minute = window.prompt("Minute (in EST)");
var m = window.prompt("Month(in EST)");
var d = Number(window.prompt("Day (in EST)"));


let est = hour
let ust = est + 4
let date = d + 1
let date1 = d
let date2 = d - 1 
let month = m
let min = minute 


//LA
const logTimePST = () => {
    pst = ust - 7 
    if (pst < 12 && pst > 0){
        return pst + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date1;
    }
    else if (pst < 0){
        pst = 12 + pst
        return pst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date2;
    }
    else if (pst < 24 && pst >0){
        pst = pst - 12
            if (pst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return pst + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date1;
            }
        }  
    else  {
    pst = pst + 24
    if (pst == 0){
            return 12 + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date2;
        }
        else{
            return pst + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date2;
        }
    }      
};


//Mexico City
const logTimeMST = () => {
    mst = ust - 5 
    if (mst < 12 && mst > 0){
        return mst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;;
    }
    else if (mst < 0){
        mst = 12 + mst
        return mst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date2;
    }
    else if (mst < 24 && mst > 0){
        mst = mst - 12
            if (mst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return mst + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date1;
            }
        }  
    else  {
    mst = mst + 24
    if (mst == 0){
            return 12 + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date2;
        }
        else{
            return mst + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date2;
        }
    }      
};


//NYC
const logTimeEST = () => {
    est = ust - 4
    if (est < 12 && est >= 0){
        if (est == 0){
                return 12 + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
            }
        else{
            return est + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
        }
    }
    else{
        est = est - 12
            if (est == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return est + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
        }     
};


//Brazil 
const logTimeBrST = () => {
    brst = ust - 3
    if (brst < 12){
        return brst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (brst < 24) {
        brst = Math.abs(brst - 12)
            if (brst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return brst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
        }   
    else{
        brst = brst - 24
            if (brst == 0){
                return 12 + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date;
            }
            else{
                return brst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date;
            }
     }    
};


//London
const logTimeBST = () => {
    bst = ust +1 
    if (bst < 12){
        return bst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (bst < 24) {
        bst = Math.abs(bst - 12)
            if (bst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return bst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
        }   
    else{
        bst = bst -24
        if (bst == 0){
                return 12 + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date;
            }
        else{
            return bst + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;
        }
    }
};


// Germany 
const logTimeGST = () => {
    Gst = ust + 2
    if (Gst < 12){
        return Gst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (Gst < 24) {
        Gst = Math.abs(Gst - 12)
            if (Gst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return Gst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
        }   
    else{
        Gst = Gst -24
        if (Gst == 0){
                return 12 + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date;
            }
            else{
                return Gst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date;
            }
     }   
};

//Istanbul
const logTimeIST = () => {
    ist = ust + 3
    if (ist < 12){
        return ist + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (ist < 24) {
        ist = Math.abs(ist - 12)
            if (ist == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return ist + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date1;
            }
        }   
    else{
        ist = ist -24
        if (ist == 0){
                return 12 + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
            else{
                return ist + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
        }
};

//Islamabad
const logTimeIsST = () => {
    isst = ust + 5
    if (isst < 12){
        return isst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (isst < 24) {
        isst = Math.abs(isst - 12)
            if (isst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return isst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
        }   
    else{
        isst = isst -24
        if (isst == 0){
                return 12 + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
            else{
                return isst + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
     }   
    
};

//Beijing
const logTimeCST = () => {
    cst = ust + 8
    if (cst < 12){
        return cst + ':' + min + 'am'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (cst < 24) {
        cst = Math.abs(cst - 12)
            if (cst == 0){
                return 12 + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
            else{
                return cst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
            }
        }   
    else{
        cst = cst -24
        if (cst == 0){
                return 12 + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
            else{
                return cst + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
        }
};

//Sydney
const logTimeSST = () => {
    sst = ust - 2
    if (sst <= 12){
        return sst + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (sst < 24) {
        sst = Math.abs(sst - 12)
            if (sst == 0){
                return 12 + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;;
            }
            else{
                return sst + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;
            }
        }   
    else{
        sst = sst -24
        if (sst == 0){
                return 12 + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date;
            }
            else{
                return sst + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date;
            }
     }   

};

//Auckland
const logTimeAST = () => {
    if (ust <= 12){
        return ust + ':' + min + 'pm'+ '&nbsp' + month + '&nbsp' + date1;
    }
    else if (ust < 24) {
        ust = Math.abs(ust - 12)
            if (ust == 0){
                return 12 + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;
            }
            else{
                return ust + ':' + min + 'am' + '&nbsp' + month + '&nbsp' + date;
            }
    }
    else{
        ust = ust - 24
        if (ust == 0){
            return 12 + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date;
        }
        else{
            return ust + ':' + min + 'pm' + '&nbsp' + month + '&nbsp' + date;
        }
    }      
};

console.log(' &nbsp &nbsp' + logTimePST());
console.log(' &nbsp &nbsp'  + logTimeMST());
console.log(' &nbsp &nbsp'  + logTimeEST());
console.log(' &nbsp &nbsp'  + logTimeBrST());
console.log(' &nbsp &nbsp'  + logTimeBST());
console.log(' &nbsp &nbsp' + logTimeGST());
console.log(' &nbsp &nbsp'  + logTimeIST());
console.log(' &nbsp &nbsp'  + logTimeIsST());
console.log(' &nbsp &nbsp'   + logTimeCST());
console.log(' &nbsp &nbsp'  + logTimeSST());
console.log( ' &nbsp &nbsp' + logTimeAST());
