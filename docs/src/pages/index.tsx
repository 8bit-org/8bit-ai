import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with 8-Bit
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="8-Bit: Enabling Any Hardware to be an AI Agent">
      <main>
        <div style={{ padding: '2rem' }}>
          <section>
            <h2>8-Bit: Transform Any Hardware into an Intelligent Agent</h2>
            <p>
              Welcome to 8-Bit, your gateway to making any device AI-enabled. We’re building a platform to empower developers and engineers with the tools, open-source hardware models, and cloud-based inference APIs needed to transform everyday hardware into responsive, intelligent agents.
            </p>

            <h3>About 8-Bit</h3>
            <p>
              Our mission is simple yet ambitious: to make AI capabilities accessible for any hardware. 8-Bit combines open-source hardware models with scalable cloud APIs, enabling developers to bring advanced AI functionalities to even the most resource-limited devices.
            </p>
            <p>
              Whether you’re working with IoT sensors, embedded systems, or other constrained hardware, 8-Bit will provide you with the technical resources to unlock AI-driven insights and autonomous functionality on a small footprint.
            </p>

            <h3>What’s Coming</h3>
            <ul>
              <li><strong>Open-Source Hardware Models:</strong> Access customizable, modular hardware blueprints designed specifically for seamless AI integration and optimized for low-power, limited-resource devices.</li>
              <li><strong>Cloud Inferencing APIs:</strong> Our cloud API will allow devices to offload complex inference tasks, making it possible for even low-memory devices to leverage robust machine learning models without local compute demands.</li>
              <li><strong>Technical Documentation:</strong> Explore comprehensive, step-by-step guides to implement AI on your devices with our platform, from initial setup to advanced customization options.</li>
              <li><strong>Research & Case Studies:</strong> Our blog will feature research papers, in-depth case studies, and best practices for maximizing AI on constrained devices.</li>
            </ul>

            <h3>Coming Soon</h3>
            <p>
              Stay tuned as we finalize 8-Bit’s platform features, including detailed technical documentation, API reference materials, and hardware model repositories. We’re excited to launch tools that enable you to bring AI to the edge of every device, and we can’t wait to see what you build with 8-Bit.
            </p>


          </section>
        </div>
      </main>
    </Layout>
  );
}
