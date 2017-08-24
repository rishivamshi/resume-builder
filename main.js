function genPDF() {
    
    var doc = new jsPDF();
    
    var name = $('#name').val();
    var jobTitle = $('#jobTitle').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var aboutYou = $('#aboutYou').val();
    
    
    
    doc.setFontSize(30);
    doc.text(20,20,name);
    doc.text(20,40,jobTitle);
    doc.text(20,60,phone);
    doc.text(20,80,address);
    doc.text(20,120,email);
    doc.text(20,140,aboutYou);
    
    doc.save('test.pdf');
    
}