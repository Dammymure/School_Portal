import React from 'react';
// import HomeHeader from '../components/HomeHeader';

const About = () => {
 return (<div>About
  <div class="inline-flex" id="main_menu">
            <ul class="flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-full text-sm md:text-base" id="menu_nav">
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_home">
                    <a class="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/index.php">
                        <span class="last firstlevel">Indice</span>
                    </a>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_admin">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/index.php?action=admin">
                        <span class="firstlevel">Amministra</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=featuresettings">
                                <span class="">Funzioni ed opzioni</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=packages">
                                <span class="">Gestore Pacchetti</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=permissions">
                                <span class="">Permessi</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_moderate">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/moderate/">
                        <span class="firstlevel">Modera</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/moderate/?area=modlog">
                                <span class="">Registro moderazione</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/moderate/?area=reports">
                                <span class="">Post segnalati</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_profile">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/profile/">
                        <span class="firstlevel">Profilo</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/">
                                <span class="">Sommario</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/?area=account">
                                <span class="">Impostazioni account</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/?area=forumprofile">
                                <span class="">Profilo forum</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/?area=mentions">
                                <span class="">Tag</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_pm">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/pm/">
                        <span class="firstlevel">Messaggi privati</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/pm/">
                                <span class="">Leggi i tuoi messaggi</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/pm/?sa=send">
                                <span class="">Invia un messaggio privato</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_like">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/profile/?area=showposts;sa=liked">
                        <span class="firstlevel">Like Ricevuti</span>
                    </a>
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0" id="button_mlist">
                    <a class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" href="http://www.italiansubs.local:8081/forum/mlist/">
                        <span class="firstlevel">Utenti</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <svg class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/mlist/">
                                <span class="">Visualizza la lista degli utenti</span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1" href="http://www.italiansubs.local:8081/forum/mlist/?sa=search">
                                <span class="">Cerca utente</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
 </div>);
}



export default About;