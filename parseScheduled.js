function parseScheduled(string){
    var array = string.split(" ");
    var dateArr = array[0].split("-");
    var timeArr = array[1].split(":");
    
    function parseDate(date){
        var year = date[0];
        var month = date[1];
        var day = date[2];
        
        function parseDay(day){
            if(parseInt(day) % 10 === 1 && !(parseInt(day) > 10 && parseInt(day) < 14)){
                day += "st";
            }
            else if(parseInt(day) % 10 === 2){
                day += "nd";
            }
            else if(parseInt(day) % 10 === 3){
                day += "rd";
            }
            else{
                day += "th";
            }
            return day;
        }
        
        function parseMonth(month){
            if(month === "01"){
                month = "January";
            }
            else if(month === "02"){
                month = "February";
            }
            else if(month === "03"){
                month = "March";
            }
            else if(month === "04"){
                month = "April";
            }
            else if(month === "05"){
                month = "May";
            }
            else if(month === "06"){
                month = "June";
            }
            else if(month === "07"){
                month = "July";
            }
            else if(month === "08"){
                month = "August";
            }
            else if(month === "09"){
                month = "September";
            }
            else if(month === "10"){
                month = "October";
            }
            else if(month === "11"){
                month = "November";
            }
            else if(month === "12"){
                month = "December";
            }
            return month;
        }
        
        return parseMonth(month) +" "+ parseDay(day) +", " + year;
    }
    
    
    function parseTime(time){
        var hour = time[0];
        var minute = time[1];
        
        if(parseInt(hour) > 12){
            time = parseInt(hour) - 12 + ":" +minute + " PM";
        }
        else{
            time = parseInt(hour) + ":" +minute + " AM";
        }
        return time;
    }
    
    return parseTime(timeArr) + " on " + parseDate(dateArr);
}