function genPDF() {
    
    var doc = new jsPDF();
    
    doc.text(20,20,"Test message");
    doc.addPage();
    doc.text(20,20,"Test message2");
    doc.save('test.pdf');
    
}