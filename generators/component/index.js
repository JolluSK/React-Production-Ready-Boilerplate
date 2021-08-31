module.exports = {
  description: 'Component Generator',
  prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in components',
    },
  ],
  actions: [{
      type: 'add',
      path: 'src/components/{{folder}}/{{properCase name}}/index.ts',
      templateFile: 'generators/component/index.ts.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{folder}}/{{properCase name}}/type.tsx',
      templateFile: 'generators/component/type.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx',
      templateFile: 'generators/component/component.tsx.hbs',
    },
  ]
};