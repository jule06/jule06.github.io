


$(document).ready(function() {
    $(window).load(function() {
        toSpanish();
    });
});



function toEnlgish(){

    //Main
    $('#job_desc').text("Senior Java Developer");

    //Contact
    $('.phone_id').text("Phone");
    $('.location_id').text("Location");
    $('.web').text("Web site");
    $('.email').text("Email");
    $('#contact').text("CONTACT");
    $('#contact_desc').text("Don't forget");

    //INTRO
    $('#mySelf_id').text("About my self"); 
    $('#mySelf_desc_id').text(   "Dedicated and efficient full stack developer with 9+ years experience in web applications."+ 
                                 "I enjoy team work to grow professionally and learn from each other");
    //SKILLS
    $('#skills').text("Skills");
    $('#skills_desc').text("Most relevants");

    //EXPERTISE
    $('#expertise_id').text("My background");
    $('#expertise_desc_id').text("Some highlights");
    $('#expertise_java_id').text("I have wokred with Java for almost ten years I developed monolitics applications but at present I'm working with Micro services applications");
    $('#expertise_db_id').text("I have experiencie in: Oracle, Mysql and DB2 I'm learing about non relational databases.");
    $('#expertise_db_title_id').text("DATABASES");
    $('#expertise_agile_title_id').text("AGILE METHODOLOGIES");
    $('#expertise_agile_id').text("I have been working with SCRUM for seven years, also, I worked with others methodologies such as Kanban or XP");
    $('#expertise_fe_id').text("I worked with a lot of differents front-end frameworks such as: Angular 2+, Typescript, Javascript, Jquery, Jquery UI, Ajax, Sencha, Polymer, Bootstrap, Material, Html, CSS.");

    //EXPERIENCE
    $('#experiences').text("EXPERIENCE");
    $('#experiences_desc').text("A brief summary");
    $('#experiences_date_present').text("2020 - Present");
    $('.work_title').text("Java Developer");

        //Titles
        $('.clients').text("Clients:");
        $('.proj').text("Project:");
        $('.team').text("Team composition:");
        $('.tasks').text("Tasks:");
        $('.met').text("Agile methodologies:");
        $('.tech').text("Techonologies, Frameworks and others:");
            
            //JOBS
            //EMERGENCIAS
            $('#gcba_cli_desc').text("GCBA - GPBA - Emergencias");
            $('#gcba_proj_desc').text("Web Applicaton - Disease Control Ticket");   
            $('#gcba_rol_desc').text("JAVA backend developer");     
            $('#gcba_team_desc').text("Technical lead, 5 JAVA developers, 3 Front End developers, 3 Functional analysts, 2 QA");
            $('#gcba_tasks_desc').text("Features and bugs development, microservice architecture implementatio");
            $('#gcba_met_desc').text("Srcum (Daily - Planing - Grooming - Retro)");
            $('#gcba_tech_desc').text("Java 1.8, API Rest, Springboot, SpringCloud, SpringSecurity, Feign, Oracle, Flyway");     

            //ENERMINDS
            $('#ener_cli_desc').text("Edenor - Edesur");
            $('#ener_proj_desc').text("Web Applicaton - Power Outage Monitoring‎");   
            $('#ener_rol_desc').text("JAVA fullstack developer");     
            $('#ener_team_desc').text("Technical lead, 3 JAVA full stack developers");
            $('#ener_tasks_desc').text("Features and bugs development, Deploys, meetings with product owner, QA, Functional analysts");     
            $('#ener_gcba_met_desc').text("Daily Team composition meetings");
            $('#ener_met_desc').text("Java 1.8, Javascipt, Angular 2+, CSS, Bootstrap, Material, JSON, API Rest, Springboot, Jpa, Git, Maven, Planio");

            //CLARIN
            $('#clarin_cli_desc').text("Clarin");
            $('#clarin_proj_desc').text("Web application - Call Center");   
            $('#clarin_rol_desc').text("JAVA full stack developer");     
            $('#clarin_team_desc').text("Technical lead, 3 JAVA full stack developers 2 QA, 2 Functional analysis");
            $('#clarin_tasks_desc').text("Features and bugs development, Deploys, meetings with product owne");
            $('#clarin_met_desc').text("Srcum (Daily - Planing Grooming - Retro)");
            $('#clarin_tech_desc').text("Java 1.6, Javasctip, Sencha, CSS, Hiberanate, Ajax, JSON, Struts2, SOAP, Oracle, JBoss, SVN, GIT, Maven, JIRA");

            //SOFTTEK
            $('#sofftek_cli_desc').text("OSDE");
            $('#sofftek_proj_desc').text("Web Applicaton - Reimbursement of medical certificates");   
            $('#sofftek_rol_desc').text("JAVA full stack developer");     
            $('#sofftek_team_desc').text("Software architect, Technical lead, 3 JAVA full stack developers (QAs and Functional analysts client side)");
            $('#sofftek_tasks_desc').text("Features and bugs development");
            $('#sofftek_met_desc').text("Srcum (Daily - Planing Grooming - Retro)");
            $('#sofftek_tech_desc').text("Java 1.6, Javasript, HTML, CSS, Jquery, Ajax, JSON, Struts2, Hibernate, SOAP, Oracle, Jboss, SVN, Maven, JIRA");

            //IBM
            $('#ibm_cli_desc').text("IBM");
            $('#ibm_proj_desc').text("Web Applicaton - Financial orientation");   
            $('#ibm_rol_desc').text("JAVA fullstack developer");     
            $('#ibm_team_desc').text("Technical lead, 3 JAVA full stack developers (QAs and Functional analysts client side)");
            $('#ibm_tasks_desc').text("Minor features and bugs development");
            $('#ibm_met_desc').text("-");
            $('#ibm_tech_desc').text("Java 1.6, EJB, JSP, Servlet, HTML, Javascipt, DB2, IBM Was, SVN, Maven, JIRA");

    //EDUCATION
    $('#education').text("EDUCATION");
    $('#education_desc').text("In progress");
    $('#university_desc').text("Systems Engineering");
    $('#school_desc').text("Bachelor of Economy Science");
            
     
    //HOBBIES
    $('#hobbies_title').text("HOBBIES");
    $('#hobbies_desc').text("Some hobbies that I have");
    $('#football_title').text("FOOTBALL");
    $('#coocking_title').text("COOK");
    $('#programming_title').text("PROGRAMMING");
    $('#gym_title').text("GYM");
    $('#football_desc').text("I play this great sport every Saturdays with friends. I'm part of a team in an amateur local tournament");
    $('#coocking_desc').text("As a fan of culinary arts I enjoy cooking and trying new flavours");
    $('#programming_desc').text("I like programming when I have free time.");
    $('#gym_desc').text("It's the best place when I want to get away from it all.");
    
    $('#saveaspdf').text("Download as PDF");

}

function toSpanish(){

    //Main
    $('#job_desc').text("Desarrollador Java Senior");
    
    //Contact
    $('.phone_id').text("Teléfono");
    $('.location_id').text("Ubicación");
    $('.web').text("Sitio Web");
    $('.email').text("Correo");
    $('#contact').text("CONTACTO");
    $('#contact_desc').text("No lo olvides");
    
    //INTRO
    $('#mySelf_id').text("Sobre mi");
    $('#mySelf_desc_id').text(  "Dedicado y eficiente desarrollador (fullstack) java con mas de 9 años de experiencia en la construccion "
                                + "de aplicaciones web. Disfruto trabajar en equipo aprendiendo de mis colegas creciendo profesionalmente dia a dia."); 

    //EXPERTISE
    $('#expertise_id').text("Conocimientos");
    $('#expertise_desc_id').text("Destacados");
    $('#expertise_java_id').text("LLevo casi de 10 año de trabajo en el desarrollo de aplicaciones java, actualmente me encuentro trabajando con arquietectura de microservicios");
    $('#expertise_db_id').text("Tengo experiencia en base de datos tales como, Oracle, Mysql, y db2. Estoy aprendiendo sobre base de datos no relacionales");
    $('#expertise_db_title_id').text("Base de datos");
    $('#expertise_agile_id').text("En los ultimos 7 años estuve trabajado mayormente bajo la metodologa agil SCRUM, tambien eh trabajado con otras como Kanan o XP");
    $('#expertise_agile_title_id').text("Metodologias Agiles");
    $('#expertise_fe_id').text("En estos años de experiecia eh trabajado con varios frameworks como por ejemplo:  Angular 2+, Typescript, Javascript, Jquery, Jquery UI, Ajax, Sencha, Polymer, Bootstrap, Material, Html, CSS");

    //SKILLS
    $('#skills').text("Habilidades");
    $('#skills_desc').text("Las mas importantes");
    
    //EXPERIENCE
    $('#experiences').text("EXPERIENCIA");
    $('#experiences_desc').text("Un breve resumen");
    $('#experiences_date_present').text("2020 - Presente");
    $('.work_title').text("Desarrollador Java");
    
        //Titles
        $('.clients').text("Clientes:");
        $('.proj').text("Proyecto:");
        $('.team').text("Composicion del equipo:");
        $('.tasks').text("Tareas:");
        $('.met').text("Metodologias agiles:");
        $('.tech').text("Tecnologias, Herramientas y otros:");

            //EMERGENCIAS
            $('#gcba_cli_desc').text("GCBA - GPBA - Emergencias");
            $('#gcba_proj_desc').text("Aplicacion Web - Control de ausencias");   
            $('#gcba_rol_desc').text("Desarrollador backend JAVA");     
            $('#gcba_team_desc').text("Lider tecnico, 5 desarrolladores java, 3 desarrolladores frontend, 3 analistas, 2 QA");
            $('#gcba_tasks_desc').text("Desarrollo de nuevas funcionalidades y correccion de bugs, armado de arquitectura microservicios");
            $('#gcba_met_desc').text("Srcum (Diarias - Planeamient - Refinacion - Retrospectivas)");
            $('#gcba_tech_desc').text("Java 1.8, API Rest, Springboot, SpringCloud, SpringSecurity, Feign, Oracle, Flyway");

            //ENERMINDS
            $('#ener_cli_desc').text("Edenor - Edesur");
            $('#ener_proj_desc').text("Aplicacon Web - Control de cortes de energia");   
            $('#ener_rol_desc').text("Desarrollador FullStack JAVA");     
            $('#ener_team_desc').text("Lider tecnico, 3 desarrolladores java");
            $('#ener_tasks_desc').text("Desarrollo de nuevas funcionalidades y correccion de bugs, deploys, paricipacion en reuion de de planificacion de desarrrollo, QA, analisis");
            $('#ener_met_desc').text("Scrum (Reuniones diarias)");
            $('#ener_tech_desc').text("Java 1.8, Javascipt, Angular 2+, CSS, Bootstrap, Material, JSON, API Rest, Springboot, Jpa, Git, Maven, Planio");

            //CLARIN
            $('#clarin_cli_desc').text("Clarin");
            $('#clarin_proj_desc').text("Aplicaion Web - Call Center");   
            $('#clarin_rol_desc').text("Desarrollador FullStack java");     
            $('#clarin_team_desc').text("Lider tecnico, 4 desarrolladores java, 2 QA, 2 analista funcional");
            $('#clarin_tasks_desc').text("Desarrollo de nuevas funcionalidades y correccion de bugs, deploys, paricipacion en reuion de de planificacion de desarrrollo");
            $('#clarin_met_desc').text("Srcum (Diarias - Planeamient - Refinacion - Retrospectivas)");
            $('#clarin_tech_desc').text("Desarrollo de nuevas funcionalidades y correccion de bugs, deploys, paricipacion en reuion de de planificacion de desarrrollo");

            //SOFTTEK
            $('#sofftek_cli_desc').text("OSDE");
            $('#sofftek_proj_desc').text("Aplicaion Web - Reintegros medicos");   
            $('#sofftek_rol_desc').text("Desarrollador FullStack JAVA");     
            $('#sofftek_team_desc').text("Arquitecto, Lider tecnico, 4 desarrolladores java, (QA y Funcionaeles en el cliente)  ");
            $('#sofftek_tasks_desc').text("Desarrollo de nuevas funcionalidades y correccion de bugs");
            $('#sofftek_met_desc').text("Srcum (Diarias - Planeamient - Refinacion - Retrospectivas)s");
            $('#sofftek_tech_desc').text("Desarrollo de nuevas funcionalidades y correccion de bugs");

            //IBM
            $('#ibm_cli_desc').text("IBM");
            $('#ibm_proj_desc').text("Aplicaion Web - Portal Financiero");   
            $('#ibm_rol_desc').text("Desarrollador FullStack JAVA");     
            $('#ibm_team_desc').text("Lider Tecnico, 3 desarrolladores java (QA y Funcionaeles en el cliente) ");
            $('#ibm_tasks_desc').text("Desarrollo de funcionalidades menores y correcion de bugs menores");
            $('#ibm_met_desc').text(" - ");
            $('#ibm_tech_desc').text("Desarrollo de funcionalidades menores y correcion de bugs menores");
    
    //HOBBIES
    $('#hobbies_title').text("PASATIEMPOS");
    $('#hobbies_desc').text("Algunas cosas que me gustan");
    $('#football_title').text("FUTBOL");
    $('#coocking_title').text("COCINAR");
    $('#programming_title').text("PROGRAMAR");
    $('#gym_title').text("GYM");
    $('#football_desc').text("Juego al futbol todos los sabados, actualmente juego en un euipo en un torneo amateur");
    $('#coocking_desc').text("Me gusta y disfruto cocinar buscando descubrir nuevos sabores");
    $('#programming_desc').text("Cuando tengo tiempo libre me gusta programar");
    $('#gym_desc').text("Es el mejor lugar para olvidarme de todo por un rato");

    //EDUCATION
    $('#education').text("EDUCACION");
    $('#education_desc').text("En curso");
    $('#university_desc').text("Ingenieria en sistemas");
    $('#school_desc').text("Bachillrato en economias");

    $('#saveaspdf').text("Descargar como PDF");
}