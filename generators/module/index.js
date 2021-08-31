module.exports = {
  description: 'Module Generator',
  prompts: [{
      type: 'input',
      name: 'name',
      message: 'Module name',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in Modules',
    },
  ],
  actions: [{
      type: 'add',
      path: 'src/modules/{{folder}}/api/index.ts',
      templateFile: 'generators/module/api.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/modules/{{folder}}/components/index.tsx',
      templateFile: 'generators/module/component.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/modules/{{folder}}/routes/index.tsx',
      templateFile: 'generators/module/route.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/modules/{{folder}}/types/index.tsx',
      templateFile: 'generators/module/type.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/modules/{{folder}}/index.tsx',
      templateFile: 'generators/module/index.tsx.hbs',
    },
  ]
};