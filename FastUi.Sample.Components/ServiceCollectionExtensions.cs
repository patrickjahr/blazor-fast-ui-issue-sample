using Microsoft.Extensions.DependencyInjection;
using Microsoft.Fast.Components.FluentUI;

namespace FastUi.Sample.Components
{
    public static class ServiceCollectionExtensions
    {
        public static void AddCustomLib(this IServiceCollection services)
        {
            LibraryConfiguration config = new(ConfigurationGenerator.GetIconConfiguration(), ConfigurationGenerator.GetEmojiConfiguration());
            services.AddFluentUIComponents(config);
        }
    }
}
