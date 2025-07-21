export default function Terms() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0077be]">Terms and Conditions</h1>

      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Burn Radio website and services, you accept and agree to be bound by the terms and
          conditions of this agreement. If you do not agree to these terms, please do not use our website or services.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily access the materials on Burn Radio's website for personal, non-commercial
          use only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Burn Radio's website are provided on an 'as is' basis. Burn Radio makes no warranties,
          expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
          implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
          intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall Burn Radio or its suppliers be liable for any damages (including, without limitation,
          damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
          use the materials on Burn Radio's website, even if Burn Radio or a Burn Radio authorized representative has
          been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>5. Accuracy of Materials</h2>
        <p>
          The materials appearing on Burn Radio's website could include technical, typographical, or photographic
          errors. Burn Radio does not warrant that any of the materials on its website are accurate, complete, or
          current. Burn Radio may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2>6. Links</h2>
        <p>
          Burn Radio has not reviewed all of the sites linked to its website and is not responsible for the contents of
          any such linked site. The inclusion of any link does not imply endorsement by Burn Radio of the site. Use of
          any such linked website is at the user's own risk.
        </p>

        <h2>7. Modifications</h2>
        <p>
          Burn Radio may revise these terms of service for its website at any time without notice. By using this
          website, you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of Uganda and you
          irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p>
          Burn Radio Ltd
          <br />
          Plot 653 Shrine Drive Nalya Estates
          <br />
          Kampala, Uganda
          <br />
          Email: info@burnradio.com
        </p>
      </div>
    </main>
  )
}
