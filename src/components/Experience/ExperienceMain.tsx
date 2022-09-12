import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'

import JobDescription from './JobDescription'
import JobPeriod from './JobPeriod'
import JobTechnologies from './JobTechnologies'
import JobTitle from './JobTitle'
import JobResponsibilities from './JobResponsibilities';

export default function ExperienceMain() {
  const { t } = useTranslation()
  return (
    <div id="experience" className="light-component">
      <Container>
        <div className="section-title text-center">
          <h2>{t('business-card-experience-title')}</h2>
          <hr />
        </div>
        <ul className="timeline">
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={10}
              fromYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
                company="Woven Planet"
                title={t('business-card-experience-job-woven-planet-4-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-woven-planet-4-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-woven-planet-4-responsibilities"
                />
                <JobTechnologies
                  keys={['docker', 'gitlab', 'maven', 'java', 'intellijIdea', 'concourseCI', 'kubernetes', 'terraform', 'aws', 'gitHubActions']}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={9}
              fromYear={2020}
              toMonth={6}
              toYear={2022}
            />
            <div className="timeline-panel">
              <JobTitle
                company="Rakuten Group"
                title={t('business-card-experience-job-bitcoin-com-2-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-2-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-2-responsibilities"
                />
                <JobTechnologies
                  keys={['docker', 'travis', 'gitHubActions', 'bitrise', 'java', 'kafka', 'spring', 'intellijIdea']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={8}
              fromYear={2020}
              toMonth={4}
              toYear={2019}
            />
            <div className="timeline-panel">
              <JobTitle
                company="TCS Japan"
                title={t('business-card-experience-job-bitcoin-com-1-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-1-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-1-responsibilities"
                />
                <JobTechnologies
                  keys={[
                    'maven', 'java', 'tomcat', 'lombok', 'junit', 'python',
                    'javaScript', 'jQuery', 'bootstrap', 'mariaDb', 'redis',
                    'git', 'intellijIdea', 'vsCode', 'jira'
                  ]}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={6}
              fromYear={2015}
              toMonth={4}
              toYear={2019}
            />
            <div className="timeline-panel">
              <JobTitle
                company="Lohika"
                title={t('business-card-experience-job-lohika-3-title')}
                location={t('business-card-location-odesa')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-lohika-3-responsibilities"
                />
                <JobTechnologies
                  keys={[
                    'csharp', 'xamarin', 'prism', 'dotNetCore', 'kubernetes', 'helm', 'jira',
                    'elasticsearch', 'jenkins', 'kibana', 'fluentBit', 'fluentD', 'docker',
                    'git', 'gitHub', 'prometheus', 'visualStudio', 'grafana', 'teamCity'
                  ]}
                />
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  )
}
