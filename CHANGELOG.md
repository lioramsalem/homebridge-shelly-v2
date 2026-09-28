# Changelog

## 0.20.0 - 2026-09-29

### Fixed

- Use the top-level HAP `Categories` API to prevent accessory creation from
  crashing on Homebridge 2 and HAP-NodeJS 1 or newer.
- Sanitize accessory display names for current HAP name validation while
  preserving the original names used to generate accessory UUIDs.
- Use paired-read permissions for custom consumption, electric current, and
  voltage characteristics.
- Repair the permissions of cached power-meter characteristics when existing
  accessories are restored.

### Documentation

- Identify this repository as the Homebridge 2 compatibility fork and clarify
  that it supports first-generation Shelly devices.
- Document the correct GitHub installation and update commands for Homebridge
  UI, Docker, and global service installations.
- Explain how this fork replaces the original plugin without changing existing
  Shelly configuration or cached accessories.

### Tests

- Add coverage for accessory-name sanitization, Homebridge 2 category mocks,
  paired-read characteristic permissions, and cached power-meter repairs.
