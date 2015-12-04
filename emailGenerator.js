var templateFile = "templates.csv";
var communicationFile = "communication.csv";
var summitFile = "summit.csv"

function getHeader() {
    Papa.parse(templateFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            for(var key in arrOfRes){
                if(arrOfRes[key]["id"] === 'header'){
                    document.getElementById("preview").innerHTML = arrOfRes[key]["webinar1"];
                    document.getElementById("textbox").value = arrOfRes[key]["webinar1"];
                    break;
                }
                else {
                    console.log("Header Not Found");
                }
            }
        }
    });
}

function getSummit() {
  var emailString = "";
    Papa.parse(templateFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            console.log("SUMMIT");
            var summitID = document.getElementById("summitIDInput");
            summitID = summitID.value;
            console.log(summitID);
            for(var key in arrOfRes){
                console.log(key);
                if(arrOfRes[key]["id"] === 'summit'){
                            var emailString = "";
                            var textboxValue = document.getElementById("textbox").value;
                            var previewValue = document.getElementById("preview").innerHTML;
                            var webinar1 = arrOfRes[key]["webinar1"];
                            console.log(webinar1);
                            emailString = webinar1;
                            //Incorportate update summit function here
                            updateSummit(document.getElementById("summitIDInput").value);
                            document.getElementById("textbox").value = textboxValue + emailString;
                            document.getElementById("preview").innerHTML = previewValue + emailString;
                            return emailString; 
                    break;
                }
                else {
                    console.log("HOW MANY");
                }
            }
        }
    });
}

function updateSummit(summitID) {
    Papa.parse(summitFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            for( var key in arrOfRes) {
                var emailString = document.getElementById("textbox").value;
                if( arrOfRes[key]["id"] === summitID) {
                    emailString = emailString.replace(/SUMMITTITLE/g, arrOfRes[key]["title"]);
                    emailString = emailString.replace(/ABSTRACT/g, arrOfRes[key]["description"]);
                    var dateTime = arrOfRes[key]["scheduled"];
                    dateTime = dateTime.split("/");
                    dateTime = dateTime[0];
                    var newDateTime = ""
                        switch(dateTime) {
                            case '1':
                            newDateTime += "January ";
                            break;
                            case '2':
                            newDateTime += "February ";
                            break;
                            case '3':
                            newDateTime += "March ";
                            break;
                            case '4':
                            newDateTime += "April ";
                            break;
                            case '5':
                            newDateTime += "May ";
                            break;
                            case '6':
                            newDateTime += "June ";
                            break;
                            case '7':
                            newDateTime += "July ";
                            break;
                            case '8':
                            newDateTime += "August ";
                            break;
                            case '9':
                            newDateTime += "September ";
                            break;
                            case '10':
                            newDateTime += "October ";
                            break;
                            case '11':
                            newDateTime += "November ";
                            break;
                            case '12':
                            newDateTime += "December ";
                            break;
                            default:
                            console.log("I AM ERROR");
                        }
                    emailString = emailString.replace(/SUMMITMONTH/g, newDateTime);
                    var link = "https://www.brighttalk.com/summit/" + summitID;
                    emailString = emailString.replace(/SUMMITLINK/g, link)
                    document.getElementById("textbox").value = emailString;
                    document.getElementById("preview").innerHTML = emailString;
                    return emailString;
                }
            }
        }
    });
}

function updateSummitWebinar(channelID, webcastID) {
    Papa.parse(communicationFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            for( var key in arrOfRes) {
                var emailString = document.getElementById("textbox").value;
                if( arrOfRes[key]["id"] === webcastID) {
                    emailString = emailString.replace(/WEBINARTITLE/g, arrOfRes[key]["title"]);
                    emailString = emailString.replace(/PRESENTER/g, arrOfRes[key]["presenter"]);
                    var link = "https://www.brighttalk.com/webcast/" + channelID + "/" + webcastID + "?autoclick=true&utm_source=brighttalk-audience&utm_medium=email&utm_term=silverpop&utm_campaign=" + webcastID;
                    emailString = emailString.replace(/WEBCASTLINK/g, link)
                    document.getElementById("textbox").value = emailString;
                    document.getElementById("preview").innerHTML = emailString;
                    return emailString;
                }
            }
        }
    });
}


function getSummitWebinar() {
  var emailString = "";
    Papa.parse(templateFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            console.log("SUMMIT");
            var summitID = document.getElementById("summitIDInput");
            summitID = summitID.value;
            console.log(summitID);
            for(var key in arrOfRes){
                console.log(key);
                if(arrOfRes[key]["id"] === 'summit'){
                            var emailString = "";
                            var textboxValue = document.getElementById("textbox").value;
                            var previewValue = document.getElementById("preview").innerHTML;
                            var webinar1 = arrOfRes[key]["webinar2"];
                            console.log(webinar1);
                            emailString = webinar1;
                            //Incorportate update summit function here
                            console.log("SDLJKFLSDKFJLKSDJFLKJSDFLKJSDFLKJSDFLKJDFLKJ" + document.getElementById("channelIDInputS").value);
                            updateSummitWebinar(document.getElementById("channelIDInputS").value, document.getElementById("webcastIDInputSummit").value);
                            document.getElementById("textbox").value = textboxValue + emailString;
                            document.getElementById("preview").innerHTML = previewValue + emailString;
                            return emailString; 
                    break;
                }
                else {
                    console.log("HOW MANY");
                }
            }
        }
    });
}


function getSummitFooter() {
  var emailString = "";
    Papa.parse(templateFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            var summitID = document.getElementById("summitIDInput");
            summitID = summitID.value;
            for(var key in arrOfRes){
                if(arrOfRes[key]["id"] === 'summit'){
                        console.log("SUMMITFOOTER");
                            var emailString = "";
                            var textboxValue = document.getElementById("textbox").value;
                            var previewValue = document.getElementById("preview").innerHTML;
                            var webinar1 = arrOfRes[key]["webinar3"];
                            emailString = webinar1;
                            //Incorportate update summit function here
                            //updateWebinar(channelID, webcastID);
                            document.getElementById("textbox").value = textboxValue + emailString;
                            document.getElementById("preview").innerHTML = previewValue + emailString;
                            return emailString; 
                    break;
                }
                else {

                }
            }
        }
    });
}


function getWebinar() {
    var emailString = "";
    Papa.parse(templateFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            var channelID = document.getElementById("channelIDInput");
            channelID = channelID.value;
            var webcastID = document.getElementById("webcastIDInput");
            webcastID = webcastID.value;
            for(var key in arrOfRes){
                if(arrOfRes[key]["id"] === 'webinar'){
                            var emailString = "";
                            var link = "LINK";
                            var title = "TITLE";
                            var time = "TIME";
                            var presenter = "PRESENTER";
                            var textboxValue = document.getElementById("textbox").value;
                            var previewValue = document.getElementById("preview").innerHTML;
                            var webinar1 = arrOfRes[key]["webinar1"];
                            var webinar2 = arrOfRes[key]["webinar2"];
                            var webinar3 = arrOfRes[key]["webinar3"];
                            var webinar3 = webinar3.substring(0, webinar3.length - 1);
                            var webinar4 = arrOfRes[key]["webinar4"];
                            var webinar5 = arrOfRes[key]["webinar5"];
                            var webinar6 = arrOfRes[key]["webinar6"];
                            var webinar7 = arrOfRes[key]["webinar7"];
                            emailString = webinar1 + link + webinar2 + title + webinar3 + link + webinar4 + time + webinar5 + presenter + webinar6 + link + webinar7;
                            updateWebinar(channelID, webcastID);
                            document.getElementById("textbox").value = textboxValue + emailString;
                            document.getElementById("preview").innerHTML = previewValue + emailString;
                            return emailString; 
                    break;
                }
                else {
                }
            }
        }
    });
}

function updateWebinar(channelID, webcastID) {
    Papa.parse(communicationFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            for( var key in arrOfRes) {
                var emailString = document.getElementById("textbox").value;
                if( arrOfRes[key]["id"] === webcastID) {
                    emailString = emailString.replace(/TITLE/g, arrOfRes[key]["title"]);
                    emailString = emailString.replace(/PRESENTER/g, arrOfRes[key]["presenter"]);
                    geLink = "";
                    if(arrOfRes[key]["preview_url"] === "NULL") {
                        imageLink = "https://www.brighttalk.com/content/1430434366_B.ICON.Pantone368C_(3).png";
                    }
                    else {
                        imageLink = "https://www.brighttalk.com" + arrOfRes[key]["preview_url"];
                    }
                    emailString = emailString.replace(/IMAGELINK/g, imageLink);
                    var dateTime = arrOfRes[key]["scheduled"];
                    dateTime = changeTimeAmerica(dateTime);
                    emailString = emailString.replace(/TIME/g, dateTime);
                    var link = "https://www.brighttalk.com/webcast/" + channelID + "/" + webcastID + "?autoclick=true&utm_source=brighttalk-audience&utm_medium=email&utm_term=silverpop&utm_campaign=" + webcastID;
                    emailString = emailString.replace(/LINK/g, link)
                    document.getElementById("textbox").value = emailString;
                    document.getElementById("preview").innerHTML = emailString;
                    return emailString;
                }
            }
        }
    });
}

function getFooter() {
    Papa.parse(templateFile, {
        download: true,
        header: true,
        complete: function(results) {
            var arrOfRes = results.data;
            var emailText = document.getElementById("textbox").value;
            for(var key in arrOfRes){
                if(arrOfRes[key]["id"] === 'footer'){
                    document.getElementById("preview").innerHTML = emailText + arrOfRes[key]["webinar1"];
                    document.getElementById("textbox").value = emailText + arrOfRes[key]["webinar1"];
                    break;
                }
                else {
                }
            }
        }
    });
}

function removeFooter() {
    var preview = document.getElementById("preview").innerHTML;
    var code = document.getElementById("textbox").value;
    console.log(code);
    var newCode = code.substring(0, code.indexOf("<div id=\"footerWrapper\""));
    var newPreview = preview.substring(0, preview.indexOf("<div id=\"footerWrapper\""));
    document.getElementById("textbox").value = newCode;
    console.log(newCode);
    document.getElementById("preview").innerHTML = newPreview

}

function removeSummitFooter() {
    var preview = document.getElementById("preview").innerHTML;
    var code = document.getElementById("textbox").value;
    console.log(code);
    var newCode = code.substring(0, code.indexOf("<p style=\"font-size:12px; color:#4d4d4d;\">You"));
    var newPreview = preview.substring(0, preview.indexOf("<p style=\"font-size:12px; color:#4d4d4d;\">You"));
    document.getElementById("textbox").value = newCode;
    console.log(newCode);
    document.getElementById("preview").innerHTML = newPreview

}

function changeTimeAmerica(times) {
    var dateTime = times.split(" ");
    var date = dateTime[0].split("/");
    var timeArray = dateTime[1].split(":");
    var hour = timeArray[0];
    hour = hour - 7;
    var tempHour = hour-12;
    var ampm = ""
    if (tempHour < 0) {
        ampm += " a.m.";
    }
    else {
        hour = tempHour;
        ampm += " p.m.";
    }
    var hour2 = hour + 3;
    var newDateTime = ""
    switch(date[0]) {
        case '1':
        newDateTime += "January ";
        break;
        case '2':
        newDateTime += "February ";
        break;
        case '3':
        newDateTime += "March ";
        break;
        case '4':
        newDateTime += "April ";
        break;
        case '5':
        newDateTime += "May ";
        break;
        case '6':
        newDateTime += "June ";
        break;
        case '7':
        newDateTime += "July ";
        break;
        case '8':
        newDateTime += "August ";
        break;
        case '9':
        newDateTime += "September ";
        break;
        case '10':
        newDateTime += "October ";
        break;
        case '11':
        newDateTime += "November ";
        break;
        case '12':
        newDateTime += "December ";
        break;
        default:
        console.log("I AM ERROR");

    }
    newDateTime += date[1];
    newDateTime += " ";
    newDateTime += "at " + hour + ":" + timeArray[1] + ampm + " PT / ";
    var hour2 = hour + 3;
    var ampm2 = "";
    if (hour2 > 24) {
        hour2 -= 24;
        ampm2 = " a.m.";
    }
    else if (hour2 > 12) {
        hour2 -= 12;
        ampm2 = " p.m.";
    }
    else {
        ampm2 = " a.m.";
    }
    newDateTime += hour2 + ":" + timeArray[1] + ampm2 + " ET";
    return newDateTime;

}
