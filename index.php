<?php
require_once('terms.php');
require_once('lang.class.php');

$lns = array('fr','en','nl');
$ln = new lang();
if (isset($_GET['ln']) && in_array($_GET['ln'],$lns))
	$ln->set($_GET['ln']);

define('CURRENT_LANG',strval($ln));
?><!DOCTYPE html>
<html lang="<?php echo CURRENT_LANG?>">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <link type="text/css" rel="stylesheet" href="reset.css" media="screen">
    <link type="text/css" rel="stylesheet" href="small.css" media="only screen and (max-device-width : 480px)">
    <link type="text/css" rel="stylesheet" href="style.css" media="only screen and (min-device-width : 480px)">
    <link rel="icon" type="image/png" href="/favicon.png">
    <title>Pieterjan Montens</title>

    <body>
    <div id="image"> </div>
    <div id="main">
        <section id="title">
            <h1 data-term="name" class="translate"><?php e('name'); ?></h1>
            <h3 data-term="slogan" class="translate"><?php e('slogan');?></h3>
            <div id="flags">
                <img src="be.png" \>
                <img src="fr.png" \>
                <img src="ch.png" \>
            </div>
        </section>

        <section id="realisations" class="block">
            <h3 class="translate" data-term="subtitle1"><?php e('subtitle1');?></h3>
            <dl>
                <dt><span><a href="http://juridict.raadvst-consetat.be/" class="translate" data-term="juridict"><?php e('juridict');?></a></span></dt>
                <dd class="translate" data-term="juridict-desc"><?php e('juridict-desc')?></dd>

                <dt><span><a href="http://eproadmin.raadvst-consetat.be" class="translate" data-term="eproadmin" rel="nofollow"><?php e('eproadmin');?></a></span></dt>
                <dd class="translate" data-term="eproadmin-desc"><?php e('eproadmin-desc');?></dd>
                <!--
                <dd>➜ <a href="http://youtu.be/5CIf8qu9YWI" class="translate" data-term="eproadmin-video" alt="Short e-ProAdmin presentation">
                    <?php e('epro_video');?></a></dd>
                -->
                <dd>➜ <a href="http://reflex.raadvst-consetat.be/reflex/pdf/Mbbs/2014/01/16/126273.pdf" class="translate" data-term="eproadmin-order" alt="Royal Order establishing the electronic proceedings platform">
                    <?php e('epro_order');?></a></dd>

                <dt><span><a href="http://etaamb.be" class="translate" data-term="etaamb"><?php e('etaamb');?></a></span></dt>
                <dd class="translate" data-term="etaamb-desc"><?php e('etaamb-desc');?></dd>

                <dt><span><a href="https://openjustice.be" class="translate" data-term="openjustice"><?php e('etaamb');?></a></span></dt>
                <dd class="translate" data-term="openjustice-desc"><?php e('openjustice-desc');?></dd>

                <dt class="translate" data-term="nonpubl"><?php e('nonpubl');?></dt>
                <dd><ul>
                    <li class="translate" data-term="documap"><?php e('documap');?></li>
                    <li class="translate" data-term="infomap"><?php e('infomap');?></li>
                    <li class="translate" data-term="etc"><?php e('etc');?></li>
                </ul></dd>
                <dt class="translate" data-term="many_others"><?php e('many_others');?></dt>
            </dl>
        </section>

        <section id="weblife" class="block">
            <h3 class="translate" data-term="subtitle2"><?php e('subtitle2');?></h3>
            <ul>
                <li><span><a href="http://be.linkedin.com/in/pieterjanmontens/" class="translate" data-term="linkedin"><?php e('linkedin');?></a></span></li>
                <li><span><a href="https://twitter.com/pieterjan_m" class="translate" data-term="twitter"><?php e('twitter');?></a></span></li>
                <!--
                <li><span><a href="http://careers.stackoverflow.com/pieterjanmontens " class="translate" data-term="stack"><?php e('stack');?></a></span></li>
                -->
                <li><span><a href="https://github.com/PieterjanMontens" class="translate" data-term="github"><?php e('github');?></a></span></li>
                <li><span><a href="https://medium.com/@pieterjan_m" class="translate" data-term="medium"><?php e('medium');?></a></span></li>
            </ul>
        </section>

        <section id="contact" class="block">
            <h3 class="translate" data-term="contact"><?php e('contact');?></h3>
            <a href="mailto:w%65bs&#105;te%40%6don%74en%73.%6eet?subject=Hi%20!">we&#98;<span>si</span>&#116;&#101;@m<span style="display:none">boa@uga.jou</span>&#111;nten&#115;&#46;&#110;et</a>
        </section>

        <section id="experience" class="block">
            <h3 class="translate" data-term="proexp"><?php e('proexp');?></h3>
            <p class="translate" data-term="exp_predesc"><?php e('exp_predesc');?></p>
            <br />
            <p>
            <span class="translate" data-term="exp_desc"><?php e('exp_desc');?></span>
                <a href="http://be.linkedin.com/in/pieterjanmontens/" class="translate" data-term="linkedin"><?php e('linkedin');?></a>
            </p>
        </section>

        <section id="curriculum" class="block">
            <h3 class="translate" data-term="articles"><?php e('articles');?></h3>
            <ul>
                <li><span><a href="https://plus.lesoir.be/347879/article/2021-01-09/la-chronique-de-carta-academica-deux-leviers-sobres-mais-puissants-pour-equiper" rel="nofollow">La chronique de Carta Academica - «Deux leviers sobres mais puissants pour équiper la Justice»</a></span></li>
                <li><span><a href="https://openjustice.be/2020/08/25/report-de-la-publication-des-arrets-et-jugements-une-analyse/">Report de la publication des arrêts et jugements : une analyse</a></span></li>
                <li><span><a href="https://medium.com/@pieterjan_m/%C3%A9valuer-et-innover-au-sein-du-service-public-3ed951689739">Évaluer et innover au sein du Service Public</a></span></li>
                <li><span><a href="https://medium.com/@pieterjan_m/reinterpretation-of-the-mobile-workstation-e8dc95d279f9">Reinterpretation of the mobile workstation</a></span></li>
                <li><span><a href="https://medium.com/@pieterjan_m/erlang-pi2-arm-cluster-vs-xeon-vm-40871d35d356">Erlang : Pi2 ARM cluster vs Xeon VM</a></span></li>
                <li>...</li>
            </ul>
        </section>

        <!--
        <section id="geekcred" class="block">
            <h3 class="translate" data-term="cred_title"><?php e('cred_title');?></h3>
            <ul>
                <li><span class="translate" data-term="arduino"><?php e('arduino');?></span></li>
                <li><span class="translate" data-term="opensource"><?php e('opensource');?></span></li>
                <li><span class="translate" data-term="input"><?php e('input');?></span></li>
                <li><span class="translate" data-term="env"><?php e('env');?></span></li>
                <li><span><a class="translate" data-term="workstation" href="http://imgur.com/a/36RGU"><?php e('workstation');?></a></span></li>
            </ul>
        </section>
        -->
        <div id="lang">
        <ul>
            <li> <a href="./en" id="l_en" <?php echo CURRENT_LANG == 'en' ? 'class="selected"' : 'rel="alternate" hreflang="en"';?> alt="english">EN</a></li>
            <li> <a href="./nl" id="l_nl" <?php echo CURRENT_LANG == 'nl' ? 'class="selected"' : 'rel="alternate" hreflang="nl"';?> alt="nederlands">NL</a></li>
            <li> <a href="./fr" id="l_fr" <?php echo CURRENT_LANG == 'fr' ? 'class="selected"' : 'rel="alternate" hreflang="fr"';?> alt="français">FR</a></li>
        </div>
    </div>
    <script> 
<?php echo php2js();?>
    </script>


    <script type="text/javascript" src="./jquery-3.2.1.slim.min.js"></script>
    <script type="text/javascript" src="./quickndirty.js"></script>
    </body>
</html><?php

function php2js() 
    {
    global $langs;
    global $terms;
    $langs_output = sprintf("\tvar langs = %s;\n",json_encode($langs));
    $terms_output = sprintf("\tvar terms = %s;\n",json_encode($terms));
    return $langs_output.$terms_output;
    }

function e($term)
    {
    echo t($term);
    }

function t($term) 
    {
    global $terms;
    if (!isset($terms[$term]))
        return '/'.$term.'/';
    if (isset($terms[$term][CURRENT_LANG]))
        return $terms[$term][CURRENT_LANG];
    if (isset($terms[$term]['default']))
        return $terms[$term]['default'];
    return '?'.$term.'?';
    }
