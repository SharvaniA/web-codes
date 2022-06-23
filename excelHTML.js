function ImportFile() {  
    var excelUrl = "./test.xlsx";  

    var oReq = new XMLHttpRequest();  
    oReq.open('get', excelUrl, true);  
    oReq.responseType = 'blob';  
    oReq.onload = function () {  
        var blob = oReq.response;  
        excelIO.open(blob, LoadSpread, function (message) {  
            console.log(message);  
        });  
    };  
    oReq.send(null);  
}  
function LoadSpread(json) {  
    jsonData = json;  
    workbook.fromJSON(json);  

    workbook.setActiveSheet("Revenues (Sales)");  
}  
function ExportFile() {  
    var fileName = $("#exportFileName").val();  
    if (fileName.substr(-5, 5) !== '.xlsx') {  
        fileName += '.xlsx';  
    }  
    var json = JSON.stringify(workbook.toJSON());  

    excelIO.save(json, function (blob) {  
        saveAs(blob, fileName);  
    }, function (e) {  
        if (e.errorCode === 1) {  
            alert(e.errorMessage);  
        }  
    });  
}  
function getFile() 
{  
    var workbook = document.getElementById("addRevenue").value;
    var sheet = workbook.getActiveSheet();  
    sheet.addRows(newRowIndex, 1);  
    sheet.copyTo(10, 1, newRowIndex, 1, 1, 29, GC.Spread.Sheets.CopyToOptions.style);  
}