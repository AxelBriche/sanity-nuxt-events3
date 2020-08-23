export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-3-studio',
                  apiId: '74ea3bcc-99b2-44d9-aec8-48d9b471b165'
                },
                {
                  buildHookId: '5f428f5b8ef4eb11b999c915',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-3',
                  apiId: '072f36cc-e0d3-4dd8-817a-0bf340c53565'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AxelBriche/sanity-nuxt-events3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
