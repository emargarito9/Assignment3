   /*global $*/

    $(document).ready(function(){
    
    $("#searchBtn").on("click", search);

    function search(){
            $.ajax({

                method: "GET",
                url: "https://pixabay.com/api/",
                dataType: "json",
                data: { "key":"13954355-8d352cb5d22b3564a293b5bd8","q":$("#keyword").val(), "orientation":"vertical" },
                success: function(result,status) {
                console.log(result);  
                result.hits = _.shuffle(result.hits);//shuffle all elements in an array
                //alert(result.hits[0].likes);
                $("#images").html(`<img width="500" height="550" src='${result.hits[0].webformatURL}'>  
                                        <br>Likes: ${result.hits[0].likes}`);
                if(result.hits[0].likes > 150){
                    $("#meter").html("<img src ='img/very.png'>");
                }
                else{
                    $("#meter").html("<img src ='img/poor.png'>");
                }

            }                        
            
            });//ajax
    }//search()
});       