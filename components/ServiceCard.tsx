import React, { FunctionComponent } from 'react';
import { Service } from '../types'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
        service: { Icon, title, about },
     }) => {
        function createMarkup(): { __html: string } {
            return {
               __html: about,
            }
         }
      
     
    return (
        <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 dark:text-[var(--color-brand-accent)]' />
         <div className=''>
            <h6 className='font-bold dark:text-slate-200'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} className="dark:text-slate-400"/>
         </div>
      </div>
    );
};
export default ServiceCard;