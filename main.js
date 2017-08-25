function genPDF() {
    
    var doc = new jsPDF();
    
    var name = $('#name').val();
    var jobTitle = $('#jobTitle').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var aboutYou = $('#aboutYou').val();
    
    // Educational Qualification
    
    var qualification1 = $('#qualification1').val();
    var university1 = $('#university1').val();
    var year1 = $('#year1').val();
    var percentage1 = $('#percentage1').val();
    
    var qualification2 = $('#qualification2').val();
    var university2 = $('#university2').val();
    var year2 = $('#year2').val();
    var percentage2 = $('#percentage2').val();
    
    var qualification3 = $('#qualification3').val();
    var university3 = $('#university3').val();
    var year3 = $('#year3').val();
    var percentage3 = $('#percentage3').val();
    
    //skill set prime
    
    var skillset1 = $('#skillset1').val();
    var skillset2 = $('#skillset2').val();
    var skillset3 = $('#skillset3').val();
    var skillset4 = $('#skillset4').val();
    var skillset5 = $('#skillset5').val();
    var skillset6 = $('#skillset6').val();
    
//skill language
    
    var language1 = $('#language1').val();
    var language2 = $('#language2').val();
    var language3 = $('#language3').val();
    var language4 = $('#language4').val();
    var language5 = $('#language5').val();
    var language6 = $('#language6').val();
    
    // Projects
    var proTitle1 = $('#proTitle1').val();
    var proDes1 = $('#proDes1').val();
    var proTitle2 = $('#proTitle2').val();
    var proDes2 = $('#proDes2').val();
    var proTitle3 = $('#proTitle3').val();
    var proDes3 = $('#proDes3').val();
    var proTitle4 = $('#proTitle4').val();
    var proDes4 = $('#proDes4').val();
    var proTitle5 = $('#proTitle5').val();
    var proDes5 = $('#proDes5').val();
    var proTitle6 = $('#proTitle6').val();
    var proDes6 = $('#proDes6').val();
  
    doc.text(20,20,name);
    doc.text(20,40,jobTitle);
    doc.text(20,60,phone);
    doc.text(20,80,address);
    doc.text(20,120,email);
    doc.text(20,140,aboutYou);
   
    doc.text(20,160,qualification1);
    doc.text(60,160,university1);
    doc.text(90,160,percentage1);
    doc.text(100,160,year1);
    
    doc.text(20,180,qualification2);
    doc.text(60,180,university2);
    doc.text(90,180,percentage2);
    doc.text(100,180,year2);
    
    doc.text(20,200,qualification3);
    doc.text(60,200,university3);
    doc.text(90,200,percentage3);
    doc.text(100,200,year3);
    
    doc.text(20,220,skillset1);
    doc.text(20,240,skillset2);
    doc.text(20,260,skillset3);
    doc.text(20,280,skillset4);
    doc.text(20,280,skillset5);
    doc.text(20,280,skillset6);
    doc.addPage();
    doc.text(20,20,language1);
    doc.text(20,40,language2);
    doc.text(20,60,language3);
    doc.text(20,80,language4);
    doc.text(20,80,language5);
    doc.text(20,80,language6);
    
    
    doc.text(20,20,proTitle1);
    doc.text(40,20,proDes1)
    doc.text(20,40,proTitle2);
    doc.text(40,40,proDes2)
    doc.text(20,60,proTitle3);
    doc.text(40,60,proDes3)
    doc.text(20,80,proTitle4);
    doc.text(40,80,proDes4)
    doc.text(20,100,proTitle5);
    doc.text(40,100,proDes5)
    doc.text(20,120,proTitle6);
    doc.text(40,120,proDes6)
    
    
    
    
    
    doc.save('test.pdf');
    
}