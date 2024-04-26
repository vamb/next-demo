'use client'

import InterConstant from '../../../../InterConstant'

export default function PhotoModal(props) {
  const photo = InterConstant?.PHOTOS?.find(p => p.id === props?.photo?.id)
  return (
    <div>{photo?.photoUrl}</div>
  )
}
