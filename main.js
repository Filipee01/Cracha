function showMeSomething() {
  alert(links.instagram)
}

const LinksSocialMedia = {
  github: 'Filipee01',
  youtube: 'GameOverYoutuber',
  facebook: 'FilipeCFAL',
  instagram: 'filipee.01',
  twitter: 'Filipeee01'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {}
