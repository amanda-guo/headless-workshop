import * as React from 'react'
import Link from 'next/link'
import ImageBox from 'components/shared/ImageBox'
import { Cta, CtaProps } from '../Cta/Cta'

type MenuItem = {
  label: string
  url: string
}

export type NavigationProps = {
  menu: MenuItem[]
}

export type Props = NavigationProps

export const Navigation = ({ menu }: Props) => {
  return (
    <div className="container relative mx-auto">
      <div className="absolute w-full px-5 pt-6">
        <div className="flex justify-between">
          <div>Pangea</div>
          <nav>
            {menu && (
              <ul className="ml-0 flex flex-row gap-8 ">
                {menu.map((item) => {
                  return (
                    <li key={item.url}>
                      <Link
                        className="border-b-2 border-transparent font-semibold text-black hover:border-black"
                        href={item.url}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}