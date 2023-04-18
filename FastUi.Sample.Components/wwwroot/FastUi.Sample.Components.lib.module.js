export function afterStarted(blazor) {
    var rebootLink = document.createElement('link');
    rebootLink.rel = 'stylesheet';
    rebootLink.setAttribute('href', '_content/Microsoft.Fast.Components.FluentUI/css/reboot.css');
    document.head.appendChild(rebootLink);

    var variablesLink = document.createElement('link');
    variablesLink.rel = 'stylesheet';
    variablesLink.setAttribute('href', '_content/Microsoft.Fast.Components.FluentUI/css/variables.css');
    document.head.appendChild(variablesLink);

    var customScript = document.createElement('script');
    customScript.type = 'module';
    customScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@fluentui/web-components/dist/web-components.min.js');
    document.body.appendChild(customScript);
}