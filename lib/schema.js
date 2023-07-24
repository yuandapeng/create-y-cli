
const defaultProjectName = 'create-y-cli';

module.exports = [{
    name: 'projectName',
    type: 'text',
    message: 'Project name:',
    initial: defaultProjectName,
}, {
    name: 'needsTypeScript',
    type: 'toggle',
    message: 'Add TypeScript?',
    initial: false,
    active: 'Yes',
    inactive: 'No'
},
{
    name: 'needsRouter',
    type: 'toggle',
    message: 'Add React Router for Single Page Application development?',
    initial: false,
    active: 'Yes',
    inactive: 'No'
},
{
    name: 'needsEslint',
    type: 'toggle',
    message: 'Add ESLint for code quality?',
    initial: false,
    active: 'Yes',
    inactive: 'No'
},
{
    name: 'needsPrettier',
    type: (prev, values) => {
        if (!values.needsEslint) {
            return null
        }
        return 'toggle'
    },
    message: 'Add Prettier for code formatting?',
    initial: false,
    active: 'Yes',
    inactive: 'No'
}
]