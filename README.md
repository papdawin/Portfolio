# Portfolio  site

## Development

The application uses the React javascript framework with typescript. I've also used i18n to translate the application,
to german, english and hungarian. For the look of the website I've used tailwind, following the catppuccin scheme and
using daisyUI styled components here and there.

## Deployment

The site is deployed on my local home server in a kubernetes cluster ran by k3s. The containet image is publicly available 
on [dockerhub](https://hub.docker.com/r/pdwn/portfolio) currently as arm64 and amd64 images (my raspberry requires 
arm64). The custom domain is registered under the Hungarian top level domain.