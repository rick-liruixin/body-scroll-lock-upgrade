/** @type {import('next').NextConfig} */
const generateBuildId = () => {
  if (process.env.APP_VERSION) {
    return process.env.APP_VERSION
  }
  try {
    const commitHash = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .toLowerCase()
      .trim()
    return commitHash
  } catch (error) {
    console.error('[nextConfig][commitHash]', error)
  }
  return Date.now() + ''
}

const nextConfig = {
  generateBuildId,
}

module.exports = nextConfig
