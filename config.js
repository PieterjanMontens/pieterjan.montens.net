var Limits = {'width':[13,90]
             ,'left':[44,150]
             ,'opacity':[1,30]
             ,'greyscale':[0,255]};

var ColNumber= 11;

var busy = false;
var current_language = 'fr';
var timer;
var its=0;
var max_steps=20;
var steps_interval=75;
var replacements_per_step=20;
var random_timer=undefined;

var usable_chars=[[32,32]   // ' '
                 ,[48,57]   // 0-9
                 ,[65,90]   // A-Z
                 ,[97,122]  // a-z
                 ];

var charlist = [];
