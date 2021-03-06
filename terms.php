<?php
$langs = array('fr','nl','en');
$exp = date("Y") - 2007;
$terms = array(
    'name' => array( 'default'=>'Pieterjan Montens', ),
    'slogan' => array(
        'fr'=>'Transformation numérique et innovation du droit, de la justice et du service public',
        'nl'=>'Digitale transformatie en innovatie van recht, justitie en openbaar bestuur',
        'en'=>'Digital transformation and innovation of law, justice and the public sector '
        ),
    'subtitle1'=> array(
        'fr'=>"Développeur / Juriste / Innovateur secteur public et associatif",
        'nl'=>"Ontwikkelaar / Jurist / Innovator in de openbare en non-profit sector",
        'en'=>"Developer / Jurist / Public Sector & Non-Profit innovator"
             ),
    'juridict'=>array('default'=>'juridict'),
    'juridict-desc'=> array(
        'fr'=>'Moteur de recherche et de consultation de doctrine juridique du Conseil d\'État belge',
        'nl'=>'Zoek- en raadpleeg- motor voor rechtsleer van de Belgische Raad van State',
        'en'=>'Search  and consulting engine for the Belgian Supreme Administrative Court\'s legal doctrine'
        ),
    'eproadmin'=> array('default'=>'e-ProAdmin'),
    'eproadmin-desc'=> array(
        'fr'=>'Plate-forme de procédure électronique devant le Conseil d\'État belge',
        'nl'=>'Elektronische procedure platform voor de Belgische Raad van State',
        'en'=>'Electronic proceedings platform before the Belgian Supreme Administrative Court'
        ),
    'eproadmin-video'=> array(
        'fr'=>'Courte vidéo de présentation',
        'nl'=>'Korte videopresentatie',
        'en'=>'Short presentation video'
        ),
    'eproadmin-tech'=> array(
        'fr'=>'Fiche technique',
        'nl'=>'Technische fiche',
        'en'=>'Technical sheet'
        ),
    'eproadmin-order'=> array(
        'fr'=>'Arrêté royal du 13 janvier 2014 instaurant la procédure électronique',
        'nl'=>'Koninklijk besluit van 13 januari 2014 die de elektronische rechtspleging invoert',
        'en'=>'Royal Decree of 13 januari 2014 establishing the electronic procedure'
        ),
    'adv_search'=>array('default'=>'adv_search'),
    'adv_search-desc'=> array(
        'fr'=>'Moteur de recherche des avis du Conseil d\'État belge',
        'nl'=>'Zoekmotor van de adviezen van de Belgische Raad van State',
        'en'=>'Search engine of the opions from the Belgian Supreme Administrative Court'
        ),
    'etaamb'=>array('default'=>'etaamb'),
    'etaamb-desc'=>array(
        'fr'=>'Projet personnel autour des données du Moniteur Belge',
        'nl'=>'Persoonlijk project rond inhoud van het Belgisch Staatsblad',
        'en'=>'Personal project with data from the belgian official journal'
        ),
    'openjustice'=>array('default'=>'OpenJustice.be'),
    'openjustice-desc'=>array(
        'fr'=>'Asbl transformation numérique de la justice',
        'nl'=>'Vzw digitale transformatie van justitie',
        'en'=>'Non-profit for digital transformation of justice'
        ),
    'nonpubl'=>array(
        'fr'=>'Applications non publiques',
        'nl'=>'Niet-openbare applicaties',
        'en'=>'Non-public applications'
        ),
    'many_others'=>array(
        'fr'=>'Et beaucoup, beaucoup d\'autres',
        'nl'=>'En vele, vele anderen',
        'en'=>'And many, many others'
        ),
    'documap'=>array(
        'fr'=>'Documap: portail personnalisable de ressources documentaires',
        'nl'=>'Documap: personnaliseerbare portaal van documentaire bronnen',
        'en'=>'Documap: customizable portal of documentary resources'

        ),
    'infomap'=>array(
        'fr'=>'Infomap: portail d\'informations interne',
        'nl'=>'Infomap: intern informatie portaal',
        'en'=>'Infomap: internal information portal'
        ),
    'rad'=>array(
        'fr'=>'RAD: framework de gestion de parc informatique',
        'nl'=>'RAD: framework voor IT asset management',
        'en'=>'RAD: framework for IT Asset Management'
        ),
    'etc'=>array('default'=>'...'),
    'subtitle2'=>array(
        'fr'=>'Ailleurs sur le web',
        'nl'=>'Elders op internet',
        'en'=>'Elsewhere on the web'
        ),
    'linkedin'=>array('default'=>'linkedin'),
    'twitter'=>array('default'=>'twitter'),
    'stack'=>array('default'=>'stackoverflow careers'),
    'github'=>array('default'=>'github'),
    'medium'=>array('default'=>'medium'),
    'contact'=> array('default'=>'Contact'),
    'email' => array('default' => 'info@montens.net'),
    'proexp'=>array(
        'fr'=>'Expériences professionnelles.',
        'nl'=>'Professionele ervaringen',
        'en'=>'Professional experiences'
        ),
    'exp_predesc'=>array(
        'fr'=>'Conseil d\'État, The Faktory, Beta.gouv.fr, Caisse des Dépôts, ITOU, ULiege, OpenJustice.be, ...',
        'nl'=>'Raad van State, The Faktory, Beta.gouv.fr, Caisse des Dépôts, ITOU, ULiege, OpenJustice.be, ...',
        'en'=>'Council of State, The Faktory, Beta.gouv.fr, Caisse des Dépôts, ITOU, ULiege, OpenJustice.be, ...'
        ),
    'exp_desc'=>array(
        'fr'=>'Tout, tout est décrit sur',
        'nl'=>'Alles staat genoteerd op',
        'en'=>'It\'s all written down on'
        ),
    'council'=>array(
        'fr'=>'Conseil d\'État',
        'nl'=>'Raad van State',
        'en'=>'Council of State'
        ),
    'council_desc'=>array(
        'fr'=>'Attaché, Service TIC, développement d\'applications internes et externes, administration systèmes &amp; réseau. Depuis 2007.',
        'nl'=>'Attaché, ICT Dienst, ontwikkeling van interne en externe applicaties, systeem en netwerkbeheer. Sinds 2007.',
        'en'=>'ICT Service, development of internal and external applications, systems &amp; network administration. Since 2007.'
        ),
    'formateur'=>array(
        'fr'=>'Formateur',
        'nl'=>'Trainer',
        'en'=>'Trainer'
        ),
    'ifapme'=>array(
        'fr'=>'IFAPME, Formateur web, de 2008 à 2012',
        'nl'=>'IFAPME, web Trainer, van 2008 tot 2012',
        'en'=>'IFAPME, web Trainer, 2008 to 2012'
        ),
    'egilia'=>array(
        'fr'=>'EGILIA, Formateur apache, 2012',
        'nl'=>'EGILIA, Apache Trainer, 2012',
        'en'=>'EGILIA, Apache Trainer, 2012'
        ),
    'freelance'=>array('default'=>'Freelance'),
    'freelance_dd'=>array(
        'fr'=>'Développement de projets personnels, consultance, formation. 2008 - 2016',
        'nl'=>'Ontwikkeling van persoonlijke projecten, consultancy, opleidingen. 2008 - 2016',
        'en'=>'Development of personal projects, consultancy, training. 2008 - 2016'
        ),
    'internship_dd'=>array(
        'fr'=>'Stage à la Chambre des Représentants, projet BelgiqueLex, méta-moteur de recherche, 2005',
        'nl'=>'Stage bij de Kamer der Volksverteginwoordigers, project BelgieLex, meta-zoekmotor, 2005',
        'en'=>'Internship in the Belgian House of Representatives, BelgiumLex project, meta-search engine project in 2005'
        ),
    'articles'=>array(
        'fr'=>'Articles sur le web',
        'nl'=>'Artikelen op internet',
        'en'=>'Articles on the web',
        ),
    'cv-1'=>array('default'=>'EN - 2015'),
    'cred_title'=>array(
        'fr'=>'Faits d\'armes (aka Geek Cred)',
        'nl'=>'Feats (aka Geek Cred)',
        'en'=>'Feats (aka Geek Cred)',
        ),
    'arduino'=>array('default'=>'Arduino & Raspberry hacker'),
    'software'=>array('default'=>'Software craftmanship'),
    'opensource'=>array('default'=>'Open-source fanatic'),
    'photos'=>array('default'=>'Background pictures are mine'),
    'input'=>array('default'=>'Mechanical keyboards &amp; Trackballs'),
    'env'=>array('default'=>'Dev environment: debian/i3/gvim'),
    'workstation'=>array('default'=>'A decent workstation')
    );
