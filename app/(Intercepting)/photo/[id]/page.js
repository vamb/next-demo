'use client'

import InterConstant from "../../InterConstant";
import Photo from '../../feed/@modal/(...)photo/[id]/page'

export default function PhotoPage({ params }) {
  const photo = InterConstant.PHOTOS.find(p=>p.id == params?.id)
  return (
    <div className={'flex flex-col'}>
      <div>PhotoPage</div>
      <Photo photo={photo} />
    </div>
  )
}
