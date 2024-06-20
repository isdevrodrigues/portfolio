import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import Link from "next/link"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

export function LandingPage() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
            <header className="bg-gray-950 text-gray-50 py-6 px-4 md:px-6">
                <div className="container max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10 border-2 border-gray-900 dark:border-gray-50">
                            <AvatarImage alt="Allan Rodrigues" src="allan.png"/>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <h1 className="text-lg font-semibold">Allan Rodrigues</h1>
                            <p className="text-sm text-gray-400"><Link className="text-sm hover:underline" href="mailto:webmaster@arodrigues.dev">
                                Contact me
                            </Link></p>
                        </div>
                    </div>
                    <Link href="https://myupdatedcvalro2024.s3.amazonaws.com/AllanRodriguesCV.pdf" target="_blank"><Button size="sm" className="bg-[#ff6b6b] hover:bg-[#ff4d4d]">Download CV</Button></Link>

                </div>
            </header>
            <main className="flex-1 container max-w-5xl mx-auto py-12 px-4 md:px-6 grid gap-12">
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">About Me</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Right now, I'm focused on deepening my knowledge of backend development while studying
                            Python. I'm also preparing for the AWS Solutions Architect exam.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            In my free time, I love visiting different coffee shops, experimenting with different
                            brewing methods at home, and watching horror movies. </p>
                    </div>
                    <img
                        alt="John Doe"
                        className="rounded-xl object-cover"
                        height="400"
                        src="/allan2.jpg"
                        style={{
                            aspectRatio: "600/400",
                            objectFit: "cover",
                        }}
                        width="600"
                    />
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            AWS Services
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            HTML
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            CSS
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            JavaScript
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            Prompt Engineering
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            Public Speaking
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            Linux
                        </Badge>
                        <Badge
                            className="border-gray-900 bg-gray-900/10 text-gray-900 dark:border-gray-50 dark:bg-gray-50/10 dark:text-gray-50"
                            variant="outline">
                            Version Control
                        </Badge>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Slasher Movie Recommendation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 dark:text-gray-400">
                                    A website hosted on AWS using Lambda, API Gateway, Amplify and CloudFront to
                                    interact with TMDB's API for movie data retrieval and presentation.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link className="text-gray-900 hover:underline dark:text-gray-50" href="https://d3j8llw7bztpia.cloudfront.net" target="_blank">
                                    View Project
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Fright List</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 dark:text-gray-400">
                                    A curated list of upcoming horror movies, inspired by my desire for a
                                    distraction-free and uncluttered user interface to easily find new releases. Hosted
                                    on an S3 Bucket and deployed with Amplify and CloudFront.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link className="text-gray-900 hover:underline dark:text-gray-50" href="https://main.dukqr7ahm0ux.amplifyapp.com/" target="_blank">
                                    View Project
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Bubble Tea Website</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Developed a static website for a local business while teaching myself to code. This
                                    project, my first using SASS, provided valuable hands-on experience and learning.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link className="text-gray-900 hover:underline dark:text-gray-50" href="https://isdevrodrigues.github.io/cha-lab-bh/" target="_blank">
                                    View Project
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

            </main>
            <footer className="bg-gray-950 text-gray-50 py-6 px-4 md:px-6">
                <div className="container max-w-5xl mx-auto flex items-center justify-between">
                    <p className="text-sm">© 2024 Allan Rodrigues. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link className="text-sm hover:underline" href="mailto:webmaster@arodrigues.dev">
                            E-mail
                        </Link>
                        <Link className="text-sm hover:underline"
                              href="https://www.linkedin.com/in/allan-rodrigues-72023366/">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
