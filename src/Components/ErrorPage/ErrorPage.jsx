import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
	return (
		<section class="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
			<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div class="max-w-md text-center">
					<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
						<span class="sr-only">Error</span>404
					</h2>
					<p class="text-2xl font-semibold md:text-3xl">Lo sentimos, al parecer no hay nada por aqui</p>
					<p class="mt-4 mb-8 dark:text-gray-400">Pero no te preocupes, puedes regresar a la pagina principal.</p>
					<Link to="/">
						<p class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Regresar a la pagina principal</p>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ErrorPage