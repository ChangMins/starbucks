'use strict';

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//HEADER에 search을 클릭해도 focus주기
searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});
//.search 부분이 foucs되었을 때 focused클래스 추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); //html의 속성을 가져와 쓰겠다.
});
//.search 부분이 blur되었을 때 focused클래스 삭제
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
