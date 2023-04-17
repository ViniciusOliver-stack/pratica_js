import Image from 'next/image'
import { CardProject } from '../Card'

import {
  IoRocketOutline,
  IoCloudDownloadOutline,
  IoShareSocialOutline
} from 'react-icons/io5'

import imageGroupCode from '../../../public/images/code_group.jpg'

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 mt-20">
      <div className="flex items-center gap-10 md:flex-col lg:flex-row">
        <div>
          <h1 className="font-bold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-3xl">
            Tenha ideias de projetos Front-end com projetos reais
          </h1>
          <p className="mt-10 font-normal text-lg text-white/80">
            Esta procurando algum projeto mas não sabe qual projeto fazer ou por
            onde começar para treinar suas habilidades de HTML, CSS, JavaScript
            e afins. Aqui você pode encontrar repositórios e projetos pronto
            para você se inspirar e começar desenvolver os seus próprios
            projetos.
          </p>
        </div>

        <Image
          src={imageGroupCode}
          alt="Imagem de um grupo de pessoas trabalhando na mesa"
          className="w-[34rem] rounded-md hidden md:block"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        <div>
          <a
            href="#"
            class="relative block rounded-sm border-t-4 border-primary-900 p-4 bg-zinc-900 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="flex items-center gap-4">
              <IoRocketOutline size={56} className="text-gray-500" />

              <h3 class="text-3xl font-bold sm:text-4xl text-primary-900">
                100+
              </h3>
            </div>

            <p class="mt-4 font-medium text-gray-500">
              Aqui você pode encontrar uma coleção com os melhores projetos para
              lhe inspirar na hora da criação.
            </p>
          </a>
          s
        </div>

        <div>
          <a
            href="#"
            class="relative block rounded-sm border-t-4 border-primary-900 p-4 bg-zinc-900 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="flex items-center gap-4">
              <IoCloudDownloadOutline size={56} className="text-gray-500" />

              <h3 class="text-3xl font-bold sm:text-4xl text-primary-900">
                100+
              </h3>
            </div>

            <p class="mt-4 font-medium text-gray-500">
              Aqui você pode encontrar uma coleção com os melhores projetos para
              lhe inspirar na hora da criação.
            </p>
          </a>
          s
        </div>

        <div>
          <a
            href="#"
            class="relative block rounded-sm border-t-4 border-primary-900 p-4 bg-zinc-900 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="flex items-center gap-4">
              <IoShareSocialOutline size={56} className="text-gray-500" />
              <h3 class="text-3xl font-bold sm:text-4xl text-primary-900">
                100+
              </h3>
            </div>

            <p class="mt-4 font-medium text-gray-500">
              Aqui você pode encontrar uma coleção com os melhores projetos para
              lhe inspirar na hora da criação.
            </p>
          </a>
          s
        </div>
      </div>

      <h2>Publicados recentemente</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </div>
  )
}
