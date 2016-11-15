Framework7.prototype.plugins.stat = function (app, params) {
    if (!params) return;
    var $$ = Dom7;

    var storage = function(){
        'use strict';
        return{
            local:function(key,value){
                localStorage.setItem(key,value);
            },
            retrieveLocal:function(key){
                return localStorage.getItem(key);
            },
            removeLocal:function(key){
                localStorage.removeItem(key);
            }
        };
    }();

    var ajax = function(){
        "use strict";
        return{
            get:function(url,_function){
                $.ajax({
                    url:url,
                    type:'POST',
                    success:function(e){
                        _function(e);
                    }
                })
            }
        }
    }();

    var login = function(){
        'use strict';
        return {
            ini:function(){
                var loginDetails = storage.retrieveLocal('Login Info');
                var data;

                if(loginDetails == null){
                    // nullilito
                }
                else{
                    data = JSON.parse(loginDetails);
                    if(login.test(data[0],data[1]) == 1){
                        console.log("successful sign in");
                        $$("#contentInfo").html("This is the main app. <a href='#' class='button' id='exit'>Sign Out</a>");
                        login.signOut();
                    }
                    else{
                        console.log("Failed. Username and/or password is incorrect.");
                    }
                }

                $$("#btn_signIn").click(function(){
                    var username = $$("#input_username").val();
                    var password = $$("#input_password").val();
                    storage.local('Login Info',JSON.stringify([username,password]));
                    if(login.test(username,password) == 1){
                        console.log("successful sign in");
                        $$("#contentInfo").html("This is the main app. <a href='#' class='button' id='exit'>Sign Out</a>");
                        login.signOut();
                    }
                    else{
                        console.log("Failed. Username and/or password is incorrect.");
                    }
                })
            },
            test:function(username,password){
                if((_username == username) && (_password == password)){
                    return 1;
                }
                else{
                    return 0;
                }
            },
            signOut:function(){
                $$("#exit").click(function(){
                    storage.removeLocal('Login Info');
                    window.location.reload();
                })
            }
        };
    }();    

    return {
        hooks: {
            appInit: function () {

                var content = "@echo hello world";
                ajax.get('data/file.rufo',function(e){
                    var blob = new Blob([e], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "helloworld.bat");
                });

                // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

                //     console.log('file system open: ' + fs.name);
                //     fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

                //         console.log("fileEntry is file?" + fileEntry.isFile.toString());
                //         // fileEntry.name == 'someFile.txt'
                //         // fileEntry.fullPath == '/someFile.txt'
                //         writeFile(fileEntry, null);

                //     }, onErrorCreateFile);

                // }, onErrorLoadFs);

                // ajax.get('data/file.rufo',function(e){
                //     var obj = JSON.parse(e);
                //     // $$.each(obj,function(a,b){
                //     //     content += "<li>"+
                //     //                 "    <div class='item-content'>"+
                //     //                 "        <div class='item-inner'>"+
                //     //                 "            <div class='item-title label'>"+b["Name"]+"</div>"+
                //     //                 "            <div class='item-content'>"+b["Crush"]+"</div>"+
                //     //                 "        </div>"+
                //     //                 "    </div>"+
                //     //                 "</li>";
                //     // });

                //     // $$("#contentInfo").html("<div class='list-block'><ul>"+content+"</ul></div>");
                
                //     $$("#search").on("keyup",function(){
                //         var data = $$("#search").val();
                //         if(data != ""){
                //             var search = JSON.search(obj, '//*[contains(Name, "'+data+'")]');
                //             var content = "";
                //             $$.each(search,function(a,b){
                //                 content += "<li class='accordion-item'>"+
                //                             "    <div class='item-content'>"+
                //                             "        <div class='item-inner'>"+
                //                             "            <a href='#' data-node='"+b["Crush"]+"' class='item-link item-content'>"+
                //                             "                <div class='item-inner'>"+
                //                             "                    <div class='item-title'>"+b["Name"]+
                //                             "                    <div style='display:none;'>"+b["Crush"]+"</div>"+
                //                             "                    </div>"+
                //                             "                </div>"+
                //                             "            </a> "+
                //                             "        </div>"+
                //                             "    </div>"+
                //                             "</li>";
                //             });
                //             $$("#queue #found").html("Found: "+search.length);
                //             $$("#queue #list-found").html("<div class='list-block accordion-list'><ul>"+content+"</ul></div>");
                        
                //             $$("a.item-link").on("click",function(e){
                //                 console.log(e.target.data);
                //                 // console.log($$(this+".accordion-item-content").html());
                //             })
                //         }
                //     });
                // });
            },
        }
    };
};

var app = new Framework7({
    stat: true,
    material:true
});
var $$ = Dom7;

/*
                var input = storage.retrieveLocal('statInfo');
                console.log(input);
                $$("#input_ages").val(input);

                input = input.split(','); 
                $.each(input,function(a,b){
                    input[a] = parseInt(input[a]);
                });

                input.sort(function(a,b){return a-b});

                console.log("Mean: "+math.mean(input));

                $$("#statResult").html("Mean: "+math.mean(input));

                $$("#btn_calc").on('click',function(){
                    var input = $$("#input_ages").val(); 

                    storage.local('statInfo',input);

                    input = input.split(','); 
                    $.each(input,function(a,b){
                        input[a] = parseInt(input[a]);
                    });

                    input.sort(function(a,b){return a-b});

                    console.log("Mean: "+math.mean(input));
                    $$("#statResult").html("Mean: "+math.mean(input));
                });

*/
