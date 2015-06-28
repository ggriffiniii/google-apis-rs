<!---
DO NOT EDIT !
This file was generated automatically from 'src/mako/cli/README.md.mako'
DO NOT EDIT !
-->
The `tagmanager1` command-line interface *(CLI)* allows to use most features of the *Google Tag Manager* service from the comfort of your terminal.

By default all output is printed to standard out, but flags can be set to direct it into a file independent of your shell's
capabilities. Errors will be printed to standard error, and cause the program's exit code to be non-zero.

If data-structures are requested, these will be returned as pretty-printed JSON, to be useful as input to other tools.

Everything else about the *Tag Manager* API can be found at the
[official documentation site](https://developers.google.com/tag-manager/api/v1/).

# Downloads

You can download the pre-compiled 64bit binaries for the following platforms:

* ![icon](http://megaicons.net/static/img/icons_sizes/6/140/16/ubuntu-icon.png) [ubuntu](http://dl.byronimo.de/google.rs/cli/0.3.1/ubuntu/tagmanager1.tar.gz)
* ![icon](http://hydra-media.cursecdn.com/wow.gamepedia.com/a/a2/Apple-icon-16x16.png?version=25ddd67ac3dd3b634478e3978b76cb74) [osx](http://dl.byronimo.de/google.rs/cli/0.3.1/osx/tagmanager1.tar.gz)

Find the source code [on github](https://github.com/Byron/google-apis-rs/tree/master/gen/tagmanager1-cli).

# Usage

This documentation was generated from the *Tag Manager* API at revision *20150526*. The CLI is at version *0.3.1*.

```bash
tagmanager1 [options]
        accounts
                containers-create <account-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-delete <account-id> <container-id> [-p <v>]...
                containers-get <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-list <account-id> [-p <v>]... [-o <out>]
                containers-macros-create <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-macros-delete <account-id> <container-id> <macro-id> [-p <v>]...
                containers-macros-get <account-id> <container-id> <macro-id> [-p <v>]... [-o <out>]
                containers-macros-list <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-macros-update <account-id> <container-id> <macro-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-rules-create <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-rules-delete <account-id> <container-id> <rule-id> [-p <v>]...
                containers-rules-get <account-id> <container-id> <rule-id> [-p <v>]... [-o <out>]
                containers-rules-list <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-rules-update <account-id> <container-id> <rule-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-tags-create <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-tags-delete <account-id> <container-id> <tag-id> [-p <v>]...
                containers-tags-get <account-id> <container-id> <tag-id> [-p <v>]... [-o <out>]
                containers-tags-list <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-tags-update <account-id> <container-id> <tag-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-triggers-create <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-triggers-delete <account-id> <container-id> <trigger-id> [-p <v>]...
                containers-triggers-get <account-id> <container-id> <trigger-id> [-p <v>]... [-o <out>]
                containers-triggers-list <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-triggers-update <account-id> <container-id> <trigger-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-update <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-variables-create <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-variables-delete <account-id> <container-id> <variable-id> [-p <v>]...
                containers-variables-get <account-id> <container-id> <variable-id> [-p <v>]... [-o <out>]
                containers-variables-list <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-variables-update <account-id> <container-id> <variable-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-versions-create <account-id> <container-id> (-r <kv>)... [-p <v>]... [-o <out>]
                containers-versions-delete <account-id> <container-id> <container-version-id> [-p <v>]...
                containers-versions-get <account-id> <container-id> <container-version-id> [-p <v>]... [-o <out>]
                containers-versions-list <account-id> <container-id> [-p <v>]... [-o <out>]
                containers-versions-publish <account-id> <container-id> <container-version-id> [-p <v>]... [-o <out>]
                containers-versions-restore <account-id> <container-id> <container-version-id> [-p <v>]... [-o <out>]
                containers-versions-undelete <account-id> <container-id> <container-version-id> [-p <v>]... [-o <out>]
                containers-versions-update <account-id> <container-id> <container-version-id> (-r <kv>)... [-p <v>]... [-o <out>]
                get <account-id> [-p <v>]... [-o <out>]
                list [-p <v>]... [-o <out>]
                permissions-create <account-id> (-r <kv>)... [-p <v>]... [-o <out>]
                permissions-delete <account-id> <permission-id> [-p <v>]...
                permissions-get <account-id> <permission-id> [-p <v>]... [-o <out>]
                permissions-list <account-id> [-p <v>]... [-o <out>]
                permissions-update <account-id> <permission-id> (-r <kv>)... [-p <v>]... [-o <out>]
                update <account-id> (-r <kv>)... [-p <v>]... [-o <out>]
  tagmanager1 --help

Configuration:
  [--scope <url>]...
            Specify the authentication a method should be executed in. Each scope 
            requires the user to grant this application permission to use it. 
            If unset, it defaults to the shortest scope url for a particular method.
  --config-dir <folder>
            A directory into which we will store our persistent data. Defaults to 
            a user-writable directory that we will create during the first invocation.
            [default: ~/.google-service-cli]
  --debug
            Output all server communication to standard error. `tx` and `rx` are placed 
            into the same stream.
  --debug-auth
            Output all communication related to authentication to standard error. `tx` 
            and `rx` are placed into the same stream.

```

# Configuration

The program will store all persistent data in the `~/.google-service-cli` directory in *JSON* files prefixed with `tagmanager1-`.  You can change the directory used to store configuration with the `--config-dir` flag on a per-invocation basis.

More information about the various kinds of persistent data are given in the following paragraphs.

# Authentication

Most APIs require a user to authenticate any request. If this is the case, the [scope][scopes] determines the 
set of permissions granted. The granularity of these is usually no more than *read-only* or *full-access*.

If not set, the system will automatically select the smallest feasible scope, e.g. when invoking a
method that is read-only, it will ask only for a read-only scope. 
You may use the `--scope` flag to specify a scope directly. 
All applicable scopes are documented in the respective method's CLI documentation.

The first time a scope is used, the user is asked for permission. Follow the instructions given 
by the CLI to grant permissions, or to decline.

If a scope was authenticated by the user, the respective information will be stored as *JSON* in the configuration
directory, e.g. `~/.google-service-cli/tagmanager1-token-<scope-hash>.json`. No manual management of these tokens
is necessary.

To revoke granted authentication, please refer to the [official documentation][revoke-access].

# Application Secrets

In order to allow any application to use Google services, it will need to be registered using the 
[Google Developer Console][google-dev-console]. APIs the application may use are then enabled for it
one by one. Most APIs can be used for free and have a daily quota.

To allow more comfortable usage of the CLI without forcing anyone to register an own application, the CLI
comes with a default application secret that is configured accordingly. This also means that heavy usage
all around the world may deplete the daily quota.

You can workaround this limitation by putting your own secrets file at this location: 
`~/.google-service-cli/tagmanager1-secret.json`, assuming that the required *tagmanager* API 
was enabled for it. Such a secret file can be downloaded in the *Google Developer Console* at 
*APIs & auth -> Credentials -> Download JSON* and used as is.

Learn more about how to setup Google projects and enable APIs using the [official documentation][google-project-new].


# Debugging

Even though the CLI does its best to provide usable error messages, sometimes it might be desirable to know
what exactly led to a particular issue. This is done by allowing all client-server communication to be 
output to standard error *as-is*.

The `--debug` flag will print all client-server communication to standard error, whereas the `--debug-auth` flag
will cause all communication related to authentication to standard error.
If the `--debug` flag is set, error-results will be debug-printed, possibly yielding more information about the 
issue at hand.

You may consider redirecting standard error into a file for ease of use, e.g. `tagmanager1 --debug <resource> <method> [options] 2>debug.txt`.


[scopes]: https://developers.google.com/+/api/oauth#scopes
[revoke-access]: http://webapps.stackexchange.com/a/30849
[google-dev-console]: https://console.developers.google.com/
[google-project-new]: https://developers.google.com/console/help/new/