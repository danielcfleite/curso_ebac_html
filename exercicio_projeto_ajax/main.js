$(document).ready(() => {
  const user = "danielcfleite";
  const endpoint = `https://api.github.com/users/${user}`;
  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const { name, login, avatar_url, following, followers } = json;
      $("#avatar").attr("src", String(avatar_url));
      $("#name").text(String(name));
      $("#handle").text(String(login));
      $("#followers").text(String(followers));
      $("#following").text(String(following));
      $("#profile-button").attr("href", `https://github.com/${login}`);
    });
});
