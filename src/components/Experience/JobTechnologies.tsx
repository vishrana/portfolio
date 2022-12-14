import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'

interface JobTechnologiesProps {
  keys: string[]
}

const JobTechnologies: React.FunctionComponent<JobTechnologiesProps> = ({ keys }) => {
  const technologyStorage = new TechnologyStorage()
  const { t } = useTranslation()
  return (
    <div className="technologies">
      <h5>{t('business-card-experience-technologies-title')}</h5>
      {keys
        .map((key) => technologyStorage.findByName(key))
        .map((t) => <img key={uuidv4()} src={t.img} alt={t.name} title={t.title} />)}
    </div>
  )
}

export default JobTechnologies
