var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/gentildpinto/whoami.git', // Update to point to your repository  
        user: {
            name: 'gentildpinto', // update to use your name
            email: 'gentil.junior.gp@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)