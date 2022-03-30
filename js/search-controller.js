
document.forms['myform'].elements['myfile'].onchange = function (evt) {
    if (!window.FileReader) return; // Browser is not compatible

    var reader = new FileReader();
    reader.onload = function (evt) {
        if (evt.target.readyState != 2) return;
        if (evt.target.error) {
            alert('Error while reading file');
            return;
        }
        filecontent = evt.target.result;

        console.log('filecontent:', filecontent);
        document.forms['myform'].elements['text'].value = evt.target.result;
    };
    reader.readAsText(evt.target.files[0]);
};
function onSearch() {

    var x = document.getElementById("text-search").value;
    var res = filecontent.includes(x)
    if (res === true) alert(`The file contains the word ${x} `)
    else alert(`The file does not  contains the word ${x}`)




    console.log('x:', x);
    console.log('res:', res);

}
