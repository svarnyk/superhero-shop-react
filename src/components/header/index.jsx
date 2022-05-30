// імпортуємо реакт якщо використовуємо реакт компонент
import React from 'react';

// імпортуємо компонент кнопки, зверніть увагу,
// що усі реакт компоненти ЗАВЖДИ починаються з великої літери
import Button from '../button';

export default function(params){
  return (
    <div className="header">
      {params.authorized ? 'authorized header' : 'unauthorized header'}
      {/* Використовуємо компонент кнопки, зверніть увагу, що параметри кнопки залежать від параметрів які передані компоненту хідер */}
      <Button
        modifiers={['big']}
        link={params.authorized ? '/' : '/about'}
        text={ params.authorized ? "unauthorize" : 'authorize' }
      />
    </div>
  )
}
