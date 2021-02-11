function Engineer(github) {
    this.github = github;

    getGitHub = function() {
        return this.github;
    }

    getRole = function() {
        Employee.role = 'Engineer';
    }
};

module.exports = Engineer 