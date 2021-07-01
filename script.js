
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
    
    //Times that work: 8pm EST, 1pm ET, 2pm ET, 3 pm ET, 4pm ET
    
    var hour = Number(window.prompt("Hour (in EST)"));
    var minute = window.prompt("Minute (in EST)");
    var d = Number(window.prompt("Day (in EST)"));
    var m = window.prompt("Month (in EST)");



    let date = d
    let month = m
    let est = hour
    let ust = est + 4
    let min = minute 

    //LA
    const logTimePST = () => {
        pst = ust - 7 
        if (pst < 12 && pst > 0){
            return pst + ':' + min + 'am';
        }
        else{
            pst = pst - 12
                if (pst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return pst + ':' + min + 'pm';
                }
            }     
    };


    //Mexico City
    const logTimeMST = () => {
        mst = ust - 5 
        if (mst < 12 && mst > 0){
            return mst + ':' + min + 'am';
        }
        else{
            mst = mst - 12
                if (mst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return mst + ':' + min + 'pm';
                }
            }     
    };


    //NYC
    const logTimeEST = () => {
        est = ust - 4
        if (est < 12 && est > 0){
            return est + ':' + min + 'am';
        }
        else{
            est = est - 12
                if (est == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return est + ':' + min + 'pm';
                }
            }     
    };


    //Brazil 
    const logTimeBrST = () => {
        brst = ust - 3
        if (brst < 12){
            return brst + ':' + min + 'am';
        }
        else if (brst < 24) {
            brst = Math.abs(brst - 12)
                if (brst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return brst + ':' + min + 'pm';
                }
            }   
        else{
            brst = brst -24
                if (brst == 0){
                    return 12 + ':' + min + 'am';
                }
                else{
                    return brst + ':' + min + 'am';
                }
         }    
    };


    //London
    const logTimeBST = () => {
        bst = ust +1 
        if (bst < 12){
            return bst + ':' + min + 'am';
        }
        else if (bst < 24) {
            bst = Math.abs(bst - 12)
                if (bst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return bst + ':' + min + 'pm';
                }
            }   
        else{
            bst = bst -24
            return bst + ':' + min + 'am';
        }
    };

   
    // Germany 
    const logTimeGST = () => {
        Gst = ust + 2
        if (Gst < 12){
            return Gst + ':' + min + 'am';
        }
        else if (Gst < 24) {
            Gst = Math.abs(Gst - 12)
                if (Gst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return Gst + ':' + min + 'pm';
                }
            }   
        else{
            Gst = Gst -24
            if (Gst == 0){
                    return 12 + ':' + min + 'am';
                }
                else{
                    return Gst + ':' + min + 'am';
                }
         }   
    };

    //Istanbul
    const logTimeIST = () => {
        ist = ust + 3
        if (ist < 12){
            return ist + ':' + min + 'am';
        }
        else if (ist < 24) {
            ist = Math.abs(ist - 12)
                if (ist == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return ist + ':' + min + 'pm';
                }
            }   
        else{
            ist = ist -24
            if (ist == 0){
                    return 12 + ':' + min + 'am';
                }
                else{
                    return ist + ':' + min + 'am';
                }
            }
    };

    //Islamabad
    const logTimeIsST = () => {
        isst = ust + 5
        if (isst < 12){
            return isst + ':' + min + 'am';
        }
        else if (isst < 24) {
            isst = Math.abs(isst - 12)
                if (isst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return isst + ':' + min + 'pm';
                }
            }   
        else{
            isst = isst -24
            if (isst == 0){
                    return 12 + ':' + min + 'am';
                }
                else{
                    return isst + ':' + min + 'am';
                }
         }   
        
    };

    //Beijing
    const logTimeCST = () => {
        cst = ust + 8
        if (cst < 12){
            return cst + ':' + min + 'am';
        }
        else if (cst < 24) {
            cst = Math.abs(cst - 12)
                if (cst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return cst + ':' + min + 'pm';
                }
            }   
        else{
            cst = cst -24
            if (cst == 0){
                    return 12 + ':' + min + 'am';
                }
                else{
                    return cst + ':' + min + 'am';
                }
            }
    };

    //Sydney
    const logTimeSST = () => {
        sst = ust - 2
        if (sst < 12){
            return sst + ':' + min + 'pm';
        }
        else if (sst < 24) {
            sst = Math.abs(sst - 12)
                if (sst == 0){
                    return 12 + ':' + min + 'am';
                }
                else{
                    return sst + ':' + min + 'am';
                }
            }   
        else{
            sst = sst -24
            if (sst == 0){
                    return 12 + ':' + min + 'pm';
                }
                else{
                    return sst + ':' + min + 'pm';
                }
         }   

    };

    //Auckland
    const logTimeAST = () => {
        if (ust < 12){
            return ust + ':' + min + 'pm';
        }
        else if (ust < 24) {
            ust = Math.abs(ust - 12)
                if (ust == 0){
                    return 12 + ':' + min + 'am' + (month) + (day + 1);
                }
                else{
                    return ust + ':' + min + 'am' + (month) + (day + 1);
                }
        }
        else{
            ust = ust -24
            if (ust == 0){
                return 12 + ':' + min + 'pm';
            }
            else{
                return brst + ':' + min + 'pm';
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
    console.log( ' &nbsp &nbsp'  + logTimeAST());

