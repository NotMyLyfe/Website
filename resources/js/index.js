const typedTextSpan = document.getElementById('wordSelector');
const cursorSpan = document.querySelector('.cursor');

const downButton = document.querySelector('.downButton');

const finishSentence = ["Gordon Lin!", "a student!", "a programmer!", "a musician!"];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 2000;
let arrayIndex = 0;
let charIndex = 0;

function type(){
    if (charIndex < finishSentence[arrayIndex].length){
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += finishSentence[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0){
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = finishSentence[arrayIndex].substr(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        cursorSpan.classList.remove("typing");
        arrayIndex++;
        if (arrayIndex >= finishSentence.length) arrayIndex = 0;
        setTimeout(type, parseInt(newTextDelay / 4));
    }
}

var currentDate = new Date();
if(currentDate.getMonth() > 9 || (currentDate.getMonth() == 9 && currentDate.getDate() >= 26)){
    document.getElementById("age").textContent = currentDate.getFullYear() - 2004;
}
else{
    document.getElementById("age").textContent = currentDate.getFullYear() - 2005;
}

document.addEventListener("DOMContentLoaded", function(e){
    document.body.classList.remove('fade');
    setTimeout(type, 500);
});

$(document).ready(function() {
    $("a").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
    $(".sideNav").hover(function(event){
        $(".navItem p").filter(':not(:animated)').animate({width: 'toggle'}, 250);
    }, function(){
        $(".navItem p").filter(':not(:animated)').animate({width: 'toggle'}, 250);
    });
    $(".navItem a").hover(function(){
        $(this).css({background: 'white', transition: "0.5s"});
    }, function(){
        if (!$(this).hasClass("visibleSection")) $(this).css({background: 'transparent', transition: "0.5s"});
    });
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() + $(window).height() / 2&& ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop() + $(window).height() / 2 ) {
            $(".navItem a[href='#" + $(this).attr('id') +"']").css({background: 'white', transition: "0.5s"});
            $(".navItem a[href='#" + $(this).attr('id') +"']").addClass("visibleSection");
            if ($(this).attr('id') != 'title' && !downButton.classList.contains('noDownButtonMove')){
                downButton.classList.add('noDownButtonMove');
            }
            else if($(this).attr('id') == 'title' && downButton.classList.contains('noDownButtonMove')){
                downButton.classList.remove('noDownButtonMove');
            }
        }
    });
});

$(document).scroll(function () {
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() + $(window).height() / 2&& ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop() + $(window).height() / 2 ) {
            $(".navItem a[href='#" + $(this).attr('id') +"']").css({background: 'white', transition: "0.5s"});
            $(".navItem a[href='#" + $(this).attr('id') +"']").addClass("visibleSection");
            if ($(this).attr('id') != 'title' && !downButton.classList.contains('noDownButtonMove')){
                downButton.classList.add('noDownButtonMove');
            }
            else if($(this).attr('id') == 'title' && downButton.classList.contains('noDownButtonMove')){
                downButton.classList.remove('noDownButtonMove');
            }
        }
        else if($(".navItem a[href='#" + $(this).attr('id') +"']").hasClass("visibleSection")){
            $(".navItem a[href='#" + $(this).attr('id') +"']").css({background: 'transparent', transition: "0.5s"});
            $(".navItem a[href='#" + $(this).attr('id') +"']").removeClass("visibleSection");
        }
    });
});
