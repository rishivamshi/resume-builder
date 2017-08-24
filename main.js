function genPDF() {
    
    var doc = new jsPDF();
    
    var name = $('#name').val();
    var company = $('#company').val();
    var department = $('#department').val();
    var title = $('#title').val();
    
    doc.setFontSize(30);
    doc.text(20,20,name);
    doc.text(20,40,company);
    doc.text(20,60,department);
    doc.text(20,80,title);
    
    doc.save('test.pdf');
    
}