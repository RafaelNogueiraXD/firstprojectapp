
export default function Home() {
  return (
    
    <div class="flex rounded-lg flex-shrink-0 flex-grow my-40">
        <div className="flex-1">
            <div
                class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    </span>
                    <div
                        class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>Você pode alterar seu perfil e gerenciar suas atividades</p>
                        <br/>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                        <p>
                            <a href="#" class="text-green-500 transition-all duration-300 group-hover:text-white">Visitar perfil
                                &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1">
        <div
            class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </span>
                <div
                    class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p>Não perca mais nenhuma votação, clique aqui e se atualize de todas as votações que estão ocorrendo </p>
                </div>
                <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                        <a href="#" class="text-red-500 transition-all duration-300 group-hover:text-white">vote agora
                            &rarr;
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </div>
        <div className="flex-1">
            <div
                class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    </span>
                    <div
                        class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>Possui um grupo de amigos com ideias capazes de ajudar a sociedade a prosperar? </p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                        <p>
                            <a href="#" class="text-yellow-500 transition-all duration-300 group-hover:text-white">crie sua chapa
                                &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}
